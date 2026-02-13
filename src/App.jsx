import { useState, useRef, useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaMobile } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
      botReply =
        "C++, JavaScript, React, DSA, Django, Data Cleaning & Preprocessing.";
    }
    else if (command === "projects") {
      botReply =
        "1️⃣ Chat Portfolio Website\n2️⃣ DSA Tracker\n3️⃣ Replace with your real projects.";
    }
    else if (command === "stats") {
      botReply =
        "📊 LeetCode: https://leetcode.com/prateekagr-1110\n📊 Codeforces: https://codeforces.com/profile/prateek_1110\n📊 GeeksforGeeks: https://www.geeksforgeeks.org/user/prateekagr1110/";
    }
    else if (command === "resume") {
      botReply =
        "📄 Resume: https://drive.google.com/file/d/1gUa1wCpdPrKUb4yO34kDtdylXlWnWGA7/view?usp=sharing";
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
      { text: "Type 'help' to know more about me.", type: "bot" },
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
              ➤
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;