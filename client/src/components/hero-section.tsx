import { useState, useEffect } from "react";
import { Code, Mail } from "lucide-react";
import TerminalWindow from "./terminal-window";
import TypingAnimation from "./typing-animation";

export default function HeroSection() {
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTyping(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center matrix-bg relative overflow-hidden pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <TerminalWindow>
          <div className="text-left font-mono text-sm space-y-2">
            <div className="text-vscode-comment">// Welcome to my digital space</div>
            <div><span className="text-vscode-keyword">const</span> <span className="text-vscode-cyan">developer</span> = {`{`}</div>
            <div className="ml-4">
              <span className="text-vscode-string">name</span>: <span className="text-vscode-orange">"Shashwat Sharma"</span>,
            </div>
            <div className="ml-4">
              <span className="text-vscode-string">role</span>: <span className="text-vscode-orange">"Software Developer"</span>,
            </div>
            <div className="ml-4">
              <span className="text-vscode-string">experience</span>: <span className="text-vscode-number">1.3</span>,
            </div>
            <div className="ml-4">
              <span className="text-vscode-string">specialization</span>: [<span className="text-vscode-orange">"Full-Stack"</span>, <span className="text-vscode-orange">"Spring Boot"</span>, <span className="text-vscode-orange">"Vue.js"</span>]
            </div>
            <div>{`}`}</div>
          </div>
        </TerminalWindow>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-8">
          <span className="text-white">Hi, I'm </span>
          <span className="syntax-highlight">Shashwat</span>
        </h1>
        
        <div className="text-xl md:text-2xl mb-8 font-mono h-8">
          {showTyping && (
            <TypingAnimation 
              text="Full-Stack Developer | Spring Boot Expert | Vue.js Enthusiast"
              className="typing-effect"
            />
          )}
        </div>
        
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Passionate about building scalable web applications with modern technologies. 
          Specialized in Java ecosystem with hands-on experience in microservices architecture.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="inline-flex items-center px-8 py-3 bg-vscode-blue hover:bg-blue-600 text-white rounded-lg transition-colors font-semibold"
          >
            <Code className="w-5 h-5 mr-2" />
            View Projects
          </a>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3 border border-vscode-blue text-vscode-blue hover:bg-vscode-blue hover:text-white rounded-lg transition-colors font-semibold"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
