import React, { useState } from "react";
// import { getDB } from "../db";
import { getDB } from "../../db";
import "./RawQueryBox.css";

export default function RawQueryBox() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  async function runQuery() {
    setError(null);
    setResult(null);
    try {
      const db = await getDB();
      const res = await db.exec(query.trim());
      setResult(res);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
      <h2>Raw SQL Query</h2>
      <textarea
        rows={6}
        cols={60}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your SQL query here"
      />
      <br />
      <button onClick={runQuery}>Run Query</button>

      {error && (
        <div style={{ color: "red", marginTop: "1rem" }}>Error: {error}</div>
      )}

      {result && (
        <pre
          style={{
            backgroundColor: "#f0f0f0",
            marginTop: "1rem",
            padding: "1rem",
            maxHeight: "300px",
            overflow: "auto",
          }}
        >
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
