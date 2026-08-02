import React, { useState } from 'react'
import { Mail, MapPin, Linkedin } from './Icons'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState(null) // null, 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'd889e3a5-9dc2-4554-9e04-2b1b70aee75b',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Contact from Portfolio Website'
        })
      })

      const data = await response.json()
      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error("Web3Forms submission failed:", error)
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <h2 className="section-title">Get in Touch</h2>
      
      <div className="contact-layout">
        <div className="contact-info">
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            Have an open role, research collaboration opportunity, or a complex ML pipeline problem that needs resolving? Drop a message using the form or reach out through my direct links.
          </p>

          <div className="contact-info-card">
            <Mail className="contact-info-icon" size={24} />
            <div className="contact-info-text">
              <h4>Direct Email</h4>
              <a href="mailto:b23bb1033@iitj.ac.in">b23bb1033@iitj.ac.in</a>
              <div style={{ marginTop: '0.25rem' }}>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=b23bb1033@iitj.ac.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.8rem', color: 'var(--accent)', textDecoration: 'underline' }}
                >
                  Quick Compose on Gmail
                </a>
              </div>
            </div>
          </div>

          <div className="contact-info-card">
            <Linkedin className="contact-info-icon" size={24} />
            <div className="contact-info-text">
              <h4>LinkedIn</h4>
              <a href="https://linkedin.com/in/prateek1110/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/prateek1110
              </a>
            </div>
          </div>

          <div className="contact-info-card">
            <MapPin className="contact-info-icon" size={24} />
            <div className="contact-info-text">
              <h4>Location</h4>
              <p>IIT Jodhpur, Rajasthan, India</p>
            </div>
          </div>
        </div>

        {/* Contact Form connected to Web3Forms */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              className="form-control" 
              required 
              value={formData.name} 
              onChange={handleChange}
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              className="form-control" 
              required 
              value={formData.email} 
              onChange={handleChange}
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              name="message" 
              id="message" 
              className="form-control" 
              required 
              value={formData.message} 
              onChange={handleChange}
              placeholder="What would you like to discuss?"
            />
          </div>

          {status === 'sending' && (
            <div className="form-status" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
              Sending message...
            </div>
          )}

          {status === 'success' && (
            <div className="form-status success">
              Message sent successfully! I will get back to you shortly.
            </div>
          )}

          {status === 'error' && (
            <div className="form-status error">
              Oops! Something went wrong. Please email directly at b23bb1033@iitj.ac.in.
            </div>
          )}

          <button 
            type="submit" 
            className="btn btn-primary" 
            disabled={status === 'sending'}
            style={{ width: 'fit-content' }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
