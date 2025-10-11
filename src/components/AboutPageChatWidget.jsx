import React, { useState, useEffect } from 'react';
import './AboutPageChatWidget.css';
import Subhash from "../assets/Image/Subhash CV.pdf";

const AboutPageChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWidget, setShowWidget] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey there! I'm Subhash, your friendly Full-Stack Developer. What can I help you with today?",
      isBot: true,
      timestamp: new Date()
    },
    {
      id: 2,
      text: "I specialize in React, JavaScript, Node.js and creating beautiful user interfaces. Ready to discuss your next project!",
      isBot: true,
      timestamp: new Date()
    }
  ]);

  // Auto-show chat widget after 20 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWidget(true);
      setIsOpen(true);
    }, 10000); // 20 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        isBot: false,
        timestamp: new Date()
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate developer response
      setTimeout(() => {
        const responses = [
          "Great question! I'd love to help you with that. Let me know more details about your project.",
          "That sounds like an interesting project! I specialize in React and full-stack development.",
          "I'm excited to discuss your requirements. Feel free to share more about your project goals.",
          "Thanks for reaching out! I'm available for freelance projects and collaborations.",
          "I'd be happy to help you build something amazing. What's your timeline for this project?"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        const developerResponse = {
          id: messages.length + 2,
          text: randomResponse,
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, developerResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickActions = [
    { text: "Hire Me", action: () => console.log("Hire Me") },
    { text: "View Projects", action: () => console.log("View Projects") }
  ];

  return (
    <div className="about-page-chat-widget">
      {showWidget && (
        <div className="about-page-chat-container">
          {/* Header */}
          <div className="about-page-chat-header">
            <button 
              className="about-page-close-btn"
              onClick={() => setShowWidget(false)}
              aria-label="Close chat"
            >
              ×
            </button>
            <div className="about-page-profile-section">
              <div className="about-page-profile-pic">
                <div className="about-page-profile-avatar">S</div>
              </div>
              <div className="about-page-profile-info">
                <h3 className="about-page-profile-name">Subhash</h3>
                <p className="about-page-profile-title">Full-Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="about-page-chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`about-page-message ${msg.isBot ? 'about-page-bot-message' : 'about-page-user-message'}`}>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="about-page-quick-actions">
            {quickActions.map((action, index) => (
              <button 
                key={index}
                className="about-page-quick-action-btn"
                onClick={action.action}
              >
                {action.text}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="about-page-chat-input-section">
            <div className="about-page-input-container">
              <input
                type="text"
                placeholder="Ask a question"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="about-page-message-input"
              />
              <button 
                className="about-page-send-btn"
                onClick={handleSendMessage}
                aria-label="Send message"
              >
                ✈
              </button>
            </div>
            <p className="about-page-privacy-text">
              Ready to collaborate? Let's build something amazing together!{' '}
              <a href="/#contact" className="about-page-privacy-link">Contact Me</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPageChatWidget;
