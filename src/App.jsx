import { useState, useRef, useEffect } from "react";

function App() {
  const [messages, setMessages] = useState([
    { text: "Hello 👋 I'm Prateek Agrahari", type: "bot" },
    { text: "Type 'help' to see available commands.", type: "bot" },
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

    if (command === "about") {
      botReply =
        "I am Prateek Agrahari, ML enthusiastic, passionate about DSA and Web Development. 🚀";
    }
    else if (command === "skills") {
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
    else if (command === "github") {
      botReply = "🐙 GitHub: https://github.com/prateek-1110";
    }
    else if (command === "resume") {
      botReply =
        "📄 Resume: https://drive.google.com/file/d/1gUa1wCpdPrKUb4yO34kDtdylXlWnWGA7/view?usp=sharing";
    }
    else if (command === "contact") {
      botReply =
        "📧 Email: mailto:pratek.agengg1110@gmail.com\n📱 WhatsApp: https://wa.me/917355928437\n🔗 LinkedIn: https://linkedin.com/in/prateek1110";
    }
    else if (command === "clear") {
      setMessages([
        { text: "Hello 👋 I'm Prateek Agrahari", type: "bot" },
        { text: "Type 'help' or use buttons below.", type: "bot" },
      ]);
      return;
    }
    else {
      botReply = "Unknown command.";
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

    const command = input.toLowerCase();

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
          if (msg.text === "__SHOW_BUTTONS__") {
            return (
              <div key={index} className="message bot">
                <div className="command-buttons">
                  {["about","skills","projects","stats","github","resume","contact","clear"]
                    .map((cmd) => (
                      <button
                        key={cmd}
                        className="cmd-btn"
                        onClick={() => processCommand(cmd)}
                      >
                        {cmd}
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

                return <div key={i}>{line}</div>;
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
            📤
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;