import React, { useEffect, useState } from "react";

const channel = new BroadcastChannel("patient-updates");

function TabSync() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Listen for messages from other tabs
  useEffect(() => {
    channel.onmessage = (event) => {
      setMessages((msgs) => [...msgs, `Received: ${event.data}`]);
    };

    // Cleanup on unmount
    return () => {
      channel.close();
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() !== "") {
      channel.postMessage(input);
      setMessages((msgs) => [...msgs, `Sent: ${input}`]);
      setInput("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Tab Synchronization Demo</h2>
      <input
        type="text"
        placeholder="Type message to send"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: 8, width: "300px" }}
      />
      <button
        onClick={sendMessage}
        style={{ marginLeft: 10, padding: "8px 16px" }}
      >
        Send to other tabs
      </button>

      <div style={{ marginTop: 20 }}>
        <h3>Messages Log</h3>
        <div
          style={{
            border: "1px solid #ccc",
            padding: 10,
            maxHeight: 200,
            overflowY: "auto",
            width: "350px",
            backgroundColor: "#f9f9f9",
          }}
        >
          {messages.map((msg, i) => (
            <div key={i}>{msg}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TabSync;
