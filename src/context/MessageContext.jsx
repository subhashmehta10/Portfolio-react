import React, { createContext, useState, useEffect } from "react";

export const MessageContext = createContext();

export function MessageProvider({ children }) {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("messages");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const addMessage = (msg) => {
    setMessages((prev) => [...prev, msg]);
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessageContext.Provider>
  );
}
