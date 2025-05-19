import React, { useEffect, useState } from "react";
import "./TabSync.css";

const channel = new BroadcastChannel("patient-updates");

function TabSync() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [tabId] = useState(`Tab-${Math.floor(Math.random() * 1000)}`);

  useEffect(() => {
    channel.onmessage = (event) => {
      const newMessage = {
        type: "Received",
        text: event.data,
        timestamp: new Date().toLocaleTimeString(),
        sender: "Other Tab",
      };
      setMessages((msgs) => [...msgs, newMessage]);
    };

    return () => {
      channel.close();
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() !== "") {
      channel.postMessage(`[${tabId}] ${input}`);
      const newMessage = {
        type: "Sent",
        text: `[${tabId}] ${input}`,
        timestamp: new Date().toLocaleTimeString(),
        sender: "You",
      };
      setMessages((msgs) => [...msgs, newMessage]);
      setInput("");
    }
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <div className="tabsync-container">
      <h2>Tab Synchronization Demo</h2>
      <p className="tab-id">
        Current Tab: <strong>{tabId}</strong>
      </p>

      <div className="tabsync-input-group">
        <input
          type="text"
          placeholder="Type message to send"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="tabsync-input"
        />
        <button onClick={sendMessage} className="tabsync-send-btn">
          Send
        </button>
        <button onClick={clearMessages} className="tabsync-clear-btn">
          Clear Log
        </button>
      </div>

      <div className="tabsync-log">
        <div className="tabsync-log-header">
          <h3>Messages Log ({messages.length})</h3>
          <span className="status-indicator online">● Online</span>
        </div>
        <div className="tabsync-log-body">
          {messages.map((msg, i) => (
            <div key={i} className={`log-entry ${msg.type.toLowerCase()}`}>
              <strong>{msg.type}</strong> | <em>{msg.timestamp}</em> |{" "}
              {msg.sender}: {msg.text}
            </div>
          ))}
          {messages.length === 0 && (
            <div className="log-empty">No messages yet.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TabSync;
