import React, { useState, useEffect } from "react";
import "./HeroTerminal.css";

const terminalSteps = [
  { command: "python train_model.py", output: "Epoch 5/5 | loss: 0.084 | accuracy: 95.9% ✓" },
  { command: "python ingest_pipeline.py", output: "Ingesting 3.0M geospatial records... done ✓" },
  { command: "curl -s -X POST /query", output: "p95 search latency: 1.24s | cache: hit ✓" }
];

export default function HeroTerminal() {
  const [lines, setLines] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let charIndex = 0;
    const currentStep = terminalSteps[stepIndex];
    setTypedCommand("");
    setIsTyping(true);

    const typingTimer = setInterval(() => {
      if (charIndex < currentStep.command.length) {
        setTypedCommand((prev) => prev + currentStep.command.charAt(charIndex));
        charIndex++;
      } else {
        clearInterval(typingTimer);
        setIsTyping(false);
        // Print output after a short delay
        setTimeout(() => {
          setLines((prev) => [
            ...prev,
            { type: "command", text: `$ ${currentStep.command}` },
            { type: "output", text: currentStep.output }
          ]);
          setTypedCommand("");
          
          // Move to next step or loop/reset
          setTimeout(() => {
            if (stepIndex < terminalSteps.length - 1) {
              setStepIndex((prev) => prev + 1);
            } else {
              // Pause at the end before clearing
              setTimeout(() => {
                setLines([]);
                setStepIndex(0);
              }, 4000);
            }
          }, 1500);

        }, 500);
      }
    }, 60);

    return () => clearInterval(typingTimer);
  }, [stepIndex]);

  return (
    <div className="hero-terminal">
      <div className="hero-terminal__header">
        <span className="dot dot--red"></span>
        <span className="dot dot--yellow"></span>
        <span className="dot dot--green"></span>
        <span className="hero-terminal__title">bash - prateek@iitj</span>
      </div>
      <div className="hero-terminal__body">
        {lines.map((line, idx) => (
          <div key={idx} className={`terminal-line terminal-line--${line.type}`}>
            {line.text}
          </div>
        ))}
        {isTyping && (
          <div className="terminal-line terminal-line--command">
            $ {typedCommand}
            <span className="cursor">|</span>
          </div>
        )}
        {!isTyping && lines.length === 0 && (
          <div className="terminal-line terminal-line--command">
            $ <span className="cursor">|</span>
          </div>
        )}
      </div>
    </div>
  );
}
