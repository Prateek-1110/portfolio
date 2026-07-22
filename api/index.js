const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const nodemailer = require('nodemailer');

const app = express();

// Load environment variables in local development
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(cors());
app.use(express.json());

// In-memory cache for live stats
let statsCache = {
  data: null,
  timestamp: 0
};
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Endpoint: GET /api/portfolio-data
app.get('/api/portfolio-data', (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'data.json');
    if (fs.existsSync(dataPath)) {
      const rawData = fs.readFileSync(dataPath, 'utf8');
      const jsonData = JSON.parse(rawData);
      return res.json(jsonData);
    } else {
      return res.status(404).json({ error: 'Portfolio data file not found' });
    }
  } catch (error) {
    console.error('Error reading portfolio data:', error);
    return res.status(500).json({ error: 'Internal server error reading portfolio data' });
  }
});

// Endpoint: GET /api/live-stats
app.get('/api/live-stats', async (req, res) => {
  const now = Date.now();
  if (statsCache.data && (now - statsCache.timestamp < CACHE_DURATION)) {
    return res.json(statsCache.data);
  }

  const githubUsername = 'Prateek-1110';
  const fallbackStats = {
    github: {
      username: githubUsername,
      publicRepos: 24,
      followers: 12,
      totalStars: 18,
      contributionsThisYear: 450,
      url: `https://github.com/${githubUsername}`
    },
    leetcode: {
      username: 'prateekagr-1110',
      solved: 500,
      ranking: 85000,
      rating: 1962,
      badge: 'Knight'
    },
    source: 'cache_fallback'
  };

  try {
    // 1. Fetch GitHub User Profile
    const userResponse = await axios.get(`https://api.github.com/users/${githubUsername}`, {
      headers: { 'User-Agent': 'NodeJS-Express-Portfolio' },
      timeout: 5000
    });

    // 2. Fetch GitHub Repos to count stars
    const reposResponse = await axios.get(`https://api.github.com/users/${githubUsername}/repos?per_page=100`, {
      headers: { 'User-Agent': 'NodeJS-Express-Portfolio' },
      timeout: 5000
    });

    let starsCount = 0;
    if (Array.isArray(reposResponse.data)) {
      starsCount = reposResponse.data.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
    }

    const liveData = {
      github: {
        username: githubUsername,
        publicRepos: userResponse.data.public_repos || fallbackStats.github.publicRepos,
        followers: userResponse.data.followers || fallbackStats.github.followers,
        totalStars: starsCount || fallbackStats.github.totalStars,
        contributionsThisYear: 450, // placeholder since contributions graph requires GraphQL API with token
        url: userResponse.data.html_url || fallbackStats.github.url
      },
      leetcode: fallbackStats.leetcode, // Leetcode API requires web scraping or unofficial endpoints, using fallback base
      source: 'live_api'
    };

    // Update Cache
    statsCache = {
      data: liveData,
      timestamp: now
    };

    return res.json(liveData);
  } catch (error) {
    console.warn('Failed to fetch live stats from API, returning cached/fallback values:', error.message);
    // If we have old cached data, return that, otherwise return fallback
    const responseData = statsCache.data ? { ...statsCache.data, source: 'expired_cache' } : fallbackStats;
    return res.json(responseData);
  }
});

// Endpoint: POST /api/contact
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields (name, email, message) are required' });
  }

  console.log(`Received contact message from ${name} (${email}): ${message}`);

  // Set up Nodemailer if credentials exist in .env
  const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_RECEIVER } = process.env;

  if (EMAIL_USER && EMAIL_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: EMAIL_HOST || 'smtp.gmail.com',
        port: parseInt(EMAIL_PORT || '587'),
        secure: EMAIL_PORT === '465',
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS
        }
      });

      const mailOptions = {
        from: `"${name}" <${email}>`,
        to: EMAIL_RECEIVER || EMAIL_USER,
        subject: `New Portfolio Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        replyTo: email
      };

      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      return res.status(200).json({ success: true, message: 'Message sent and email dispatched!' });
    } catch (emailError) {
      console.error('Error sending email via Nodemailer:', emailError);
      // Fallback: respond success to user but report internal email issue in logs
      return res.status(200).json({
        success: true,
        message: 'Message received on server, but dispatch failed. Saved to server logs.'
      });
    }
  } else {
    // If email credentials are not configured, succeed and print warnings
    console.warn('Nodemailer credentials not configured. Please set EMAIL_USER and EMAIL_PASS in your environment.');
    return res.status(200).json({
      success: true,
      message: 'Message successfully received on backend (Demo mode, email dispatch skipped).'
    });
  }
});

// For local testing runner
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running locally on port ${PORT}`);
  });
}

module.exports = app;
