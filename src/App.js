import React, { useState } from "react";
import ReactMarkdown from "react-markdown";


function App() {
  const [markdown, setMarkdown] = useState("# Markdown Preview");
  return (
    <main>
      <h1 className="nav">React Markdown Project</h1>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;