import { useState, useRef, useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaMobile } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";

function App() {
  const [messages, setMessages] = useState([
   {
  text: "Hello there 👋🏻\n\nMy name is <span class='my-name'>Prateek Agrahari</span>.\n\nI am a Full Stack Developer and an enthusiastic Machine Learning learner 👨🏻‍💻📚\n\nI enjoy building scalable applications and experimenting with emerging technologies.\n\nType 'help' to know more about me.",
  type: "bot"
},

  ]);
  const [theme, setTheme] = useState("dark");
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const processCommand = (command) => {
    let botReply = "";
     if (command === "skills") {
  botReply = `
  <span class="section-title">Languages I Work With:</span><br/><br/>
  • JavaScript<br/>
  • Python<br/>
  • C++<br/>
  • ...etc<br/><br/>

  <span class="section-title">Technologies & Tools:</span><br/><br/>
  • Node.js<br/>
  • React.js<br/>
  • Django<br/>
  • Pandas<br/>
  • MongoDB<br/>
  • NumPy<br/>
  • ...etc
  `;
}

else if (command === "projects") {
  setIsTyping(true);

  setTimeout(() => {
    setMessages((prev) => [
      ...prev,
      { text: "__PROJECTS__", type: "bot" },
      { text: "__SHOW_BUTTONS__", type: "bot" }
    ]);
    setIsTyping(false);
  }, 600);

  return;
}

    else if (command === "stats") {
  setIsTyping(true);

  setTimeout(() => {
    setMessages((prev) => [
      ...prev,
      { text: "__STATS__", type: "bot" },
      { text: "__SHOW_BUTTONS__", type: "bot" }
    ]);
    setIsTyping(false);
  }, 600);

  return;
}
else if (command === "education") {
  botReply = `
  
  <div class="edu-block">
    <div class="edu-header">
      <span class="edu-title">🎓 Bachelor of Technology</span>
      <span class="edu-date">2023 – 2027</span>
    </div>
    <strong>Indian Institute of Technology (IIT) Jodhpur</strong><br/>
    Bioengineering<br/>
    CGPA: <span class="edu-highlight">7.63</span>
  </div>

  <br/><br/>

  <div class="edu-block">
    <div class="edu-header">
      <span class="edu-title">🏫 Senior Secondary (Class XII)</span>
      <span class="edu-date">2021 – 2022</span>
    </div>
    CBSE Board<br/>
    Percentage: <span class="edu-highlight">93%</span>
  </div>

  <br/><br/>

  <div class="edu-block">
    <div class="edu-header">
      <span class="edu-title">🏫 Secondary (Class X)</span>
      <span class="edu-date">2019 – 2020</span>
    </div>
    CBSE Board<br/>
    Percentage: <span class="edu-highlight">95%</span>
  </div>

  `;
}


    // else if (command === "resume") {
    //   botReply =
    //     "📄 Resume: https://drive.google.com/file/d/1L9oN4Ubhe8gqiZl6UDqEcWb0zSgrCxvk/view?usp=sharing";
    // }
    else if (command === "resume") {
  setIsTyping(true);

  setTimeout(() => {
    setMessages((prev) => [
      ...prev,
      { text: "__RESUME_CARD__", type: "bot" },
      { text: "__SHOW_BUTTONS__", type: "bot" }
    ]);
    setIsTyping(false);
  }, 600);

  return;
}

   else if (command === "contact") {
  setIsTyping(true);

  setTimeout(() => {
    setMessages((prev) => [
      ...prev,
      { text: "__CONTACT_CARDS__", type: "bot" },
      { text: "__SHOW_BUTTONS__", type: "bot" }
    ]);
    setIsTyping(false);
  }, 600);

  return;
}
    else if (command === "clear window") {
      setMessages([
        {
  text: "Hello there 👋🏻\n\nMy name is <span class='my-name'>Prateek Agrahari</span>.\n\nI am a Full Stack Developer and an enthusiastic Machine Learning learner 👨🏻‍💻📚\n\nI enjoy building scalable applications and experimenting with emerging technologies.\n\nType 'help' to know more about me.",
  type: "bot"
},
      ]);
      return;
    }
   else {
  setIsTyping(true);

  setTimeout(() => {
    setMessages((prev) => [
      ...prev,
      { text: "Command not found!\n Type 'help' to know more about me.", type: "bot" },
      { text: "__SHOW_BUTTONS__", type: "bot" }
    ]);
    setIsTyping(false);
  }, 600);

  return;
}

    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: botReply, type: "bot" },
        { text: "__SHOW_BUTTONS__", type: "bot" },
      ]);
      setIsTyping(false);
    }, 600);
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    const command = input.trim().toLowerCase();

    setMessages((prev) => [
      ...prev,
      { text: input, type: "user" }
    ]);

    setInput("");

    if (command === "help") {
      setMessages((prev) => [
        ...prev,
        { text: "__SHOW_BUTTONS__", type: "bot" }
      ]);
      return;
    }
    processCommand(command);
  };

  return (
    <div className={`main-container ${theme}`}>
      <div className="header">
        <a href="https://linkedin.com/in/prateek1110" target="_blank" rel="noreferrer">
          <img src="/profile.jpg" alt="profile" />
        </a>

        <div className="header-text">
          <h3>Prateek Agrahari</h3>
          <p>last seen {currentTime}</p>
        </div>

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </div>

      <div className="chat-area">
        {messages.map((msg, index) => {
          if (msg.text === "__RESUME_CARD__") {
  return (
    <div key={index} className="message bot">
      <div className="resume-card">

        <div className="resume-info">
          <span className="resume-icon">📄</span>
          <div>
            <div className="resume-name">Prateek-Resume.pdf</div>
            <div className="resume-meta">PDF • Updated 2026</div>
          </div>
        </div>

        <div className="resume-actions">
          <a
            href="https://drive.google.com/file/d/1L9oN4Ubhe8gqiZl6UDqEcWb0zSgrCxvk/preview"
            target="_blank"
            rel="noreferrer"
            className="resume-btn"
          >
            View
          </a>

          <a
            href="https://drive.google.com/uc?export=download&id=1L9oN4Ubhe8gqiZl6UDqEcWb0zSgrCxvk"
            download
            className="resume-btn outline"
          >
            Download
          </a>
        </div>

      </div>
    </div>
  );
}

          if (msg.text === "__STATS__") {
  return (
    <div key={index} className="message bot">

      {/* LeetCode */}
      <div className="stats-block">
        <div className="stats-header">
          <a
            href="https://leetcode.com/prateekagr-1110"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leetcode/leetcode-original.svg"
              alt="LeetCode"
              className="platform-icon"
            />
          </a>
          <span>LeetCode – 300+ Problems</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill animate" style={{ width: "75%" }}></div>
        </div>
      </div>

      {/* Codeforces */}
      <div className="stats-block">
        <div className="stats-header">
          <a
            href="https://codeforces.com/profile/prateek_1110"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/free-code-forces-logo-icon-svg-download-png-2944796.png?f=webp&w=512"
              alt="Codeforces"
              className="platform-icon"
            />
          </a>
          <span>Codeforces – 200+ Problems</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill animate" style={{ width: "60%" }}></div>
        </div>
      </div>

      {/* GFG */}
      <div className="stats-block">
        <div className="stats-header">
          <a
            href="https://www.geeksforgeeks.org/user/prateekagr1110/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
              alt="GFG"
              className="platform-icon"
            />
          </a>
          <span>GeeksforGeeks – 400+ Problems</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill animate" style={{ width: "85%" }}></div>
        </div>
      </div>

    </div>
  );
}

          if (msg.text === "__PROJECTS__") {
  return (
    <div key={index} className="message bot">

      <div className="project-block">
        <span className="project-title">Uber Clone</span>
        <p>
         A full-stack real-time ride booking application built with Next.js and Firebase, featuring live location search using Mapbox API. Implemented secure authentication and persistent ride data with Firestore, optimized for seamless cross-device experience.
        </p>

        <div className="project-icons">
          <span>GitHub:</span>
          <a
            href="https://github.com/Prateek-1110/Uber_clone"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={18} />
          </a>

          <span>Live:</span>
          <a
            href="https://your-uber-live-demo.com"
            target="_blank"
            rel="noreferrer"
          >
            <FiExternalLink size={18} />
          </a>
        </div>
      </div>

      <div className="project-block">
        <span className="project-title">Banking UI</span>
        <p>
         A modern and responsive banking dashboard built with React, simulating account management and transaction flows. Focused on reusable components, dynamic validation, and scalable UI/UX architecture.
        </p>

        <div className="project-icons">
          <span>GitHub:</span>
          <a
            href="https://github.com/Prateek-1110/bank_frontend"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={18} />
          </a>

          <span>Live:</span>
          <a
            href="https://banking-ui-b23.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <FiExternalLink size={18} />
          </a>
        </div>
      </div>
      <div className="project-block">
  <span className="project-title">Urban Luxe</span>
  <p>
   A scalable MERN-based fashion e-commerce platform with product catalog, cart, and order management workflows. Designed RESTful APIs and optimized frontend state management using Redux for performance and scalability.
  </p>

  <div className="project-icons">
    <span>GitHub:</span>
    <a
      href="https://github.com/Prateek-1110/Urban-Luxe"
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub size={18} />
    </a>

    <span>Live:</span>
    <a
      href="https://ecommerce-lilac-eight-92.vercel.app/"
      target="_blank"
      rel="noreferrer"
    >
      <FiExternalLink size={18} />
    </a>
  </div>
</div>
<div className="project-block">
  <span className="project-title">Movie Recommendation System</span>
  <p>
    A CLI-based personalized movie recommendation engine built in C++, leveraging Treap data structures and Levenshtein Distance for typo-tolerant search and efficient filtering on IMDB datasets.
  </p>

  <div className="project-icons">
    <span>GitHub:</span>
    <a
      href="https://github.com/Prateek-1110/dsa_project"
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub size={18} />
    </a>
  </div>
</div>
<div className="project-block">
  <span className="project-title">Chat Portfolio Website</span>
  <p>
    An interactive WhatsApp-style portfolio built using React,
    featuring dynamic command handling, theme toggle, and responsive design(which you are seeing right now !)
  </p>

  <div className="project-icons">
    <span>GitHub:</span>
    <a
      href="https://github.com/Prateek-1110/portfolio"
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub size={18} />
    </a>

    <span>Live:</span>
    <a
      href="https://portfolio-portfolio-b23.vercel.app/"
      target="_blank"
      rel="noreferrer"
    >
      <FiExternalLink size={18} />
    </a>
  </div>
  <div className="more-projects">
  <strong>View more projects on</strong>
  <a
    href="https://github.com/Prateek-1110"
    target="_blank"
    rel="noreferrer"
    className="more-github-link"
  >
    <FaGithub size={18} />
  </a>
</div>

</div>


    </div>
  );
}

          if (msg.text === "__CONTACT_CARDS__") {
  return (
    <div key={index} className="message bot">
      <div className="contact-cards">

        <a href="https://mail.google.com/mail/?view=cm&to=pratek.agengg1110@gmail.com" className="contact-card">
          <MdEmail size={22} />
        </a>

        <a href="https://github.com/prateek-1110" target="_blank" rel="noreferrer" className="contact-card">
          <FaGithub size={22} />
        </a>

        <a href="https://instagram.com/neural_mystic" target="_blank" rel="noreferrer" className="contact-card">
          <FaInstagram size={22} />
        </a>
        <a href="https://www.linkedin.com/in/prateek1110/" target="_blank" rel="noreferrer" className="contact-card">
          <FaLinkedin size={22} />
        </a>


      </div>
    </div>
  );
}
          if (msg.text === "__SHOW_BUTTONS__") {
            return (
              <div key={index} className="message bot">
               <div className="command-buttons">
  {[
    {label : "Education",value:"education"},
    { label: "Skills", value: "skills" },
    { label: "Projects", value: "projects" },
    { label: "Stats", value: "stats" },
    { label: "Resume", value: "resume" },
    { label: "Contact", value: "contact" },
    { label: "Clear Window", value: "clear window" }
  ].map((cmd) => (
    <button
      key={cmd.value}                 
      className="cmd-btn"
      onClick={() => processCommand(cmd.value)} 
    >
      {cmd.label}                     
    </button>
  ))}
</div>

              </div>
            );
          }

          return (
            <div key={index} className={`message ${msg.type}`}>
              {msg.text.split("\n").map((line, i) => {
                const urlMatch = line.match(/(https?:\/\/[^\s]+)/);
                const mailMatch = line.match(/(mailto:[^\s]+)/);

                if (urlMatch) {
                  return (
                    <div key={i}>
                      {line.replace(urlMatch[0], "")}
                      <a href={urlMatch[0]} target="_blank" rel="noreferrer">
                        {urlMatch[0]}
                      </a>
                    </div>
                  );
                }

                if (mailMatch) {
                  return (
                    <div key={i}>
                      {line.replace(mailMatch[0], "")}
                      <a href={mailMatch[0]}>
                        {mailMatch[0].replace("mailto:", "")}
                      </a>
                    </div>
                  );
                }

               return (
  <div
    key={i}
    dangerouslySetInnerHTML={{ __html: line }}
  />
);

              })}
            </div>
          );
        })}

        {isTyping && (
          <div className="message bot typing">
            <span>●</span><span>●</span><span>●</span>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="input-wrapper">
        <div className="input-area" ref={inputRef}>
          <input
            type="text"
            placeholder="Type command..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
            autoComplete="off"
            maxLength="100"
          />
          <button onClick={handleSend} className="send-btn">
  <img src="/send.png" alt="send" />
</button>

        </div>
      </div>
    </div>
  );
}

export default App;