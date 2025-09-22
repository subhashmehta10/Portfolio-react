import { useState, useEffect } from "react";

function ChatWidget() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="chat-widget" aria-live="polite">
      {open && (
        <div className="chat-panel card" role="dialog" aria-label="Chat">
          <div className="chat-head">
            <strong>Chat with me</strong>
            <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">✕</button>
          </div>
          <div className="chat-body">
            <p className="lead">Hi! How can I help you?</p>
            <a className="btn" href="https://wa.me/917322986294" target="_blank" rel="noreferrer noopener">WhatsApp</a>
            <a className="btn secondary" href="mailto:kumarmehta172@gmail.com">Email me</a>
          </div>
        </div>
      )}
      <button
        className="chat-btn"
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        💬
      </button>
    </div>
  );
}

export default ChatWidget;


