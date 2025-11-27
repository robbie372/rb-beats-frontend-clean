// src/App.jsx
import React from "react";
import "./App.css";

function App() {
  const beats = [
    { id: 1, name: "Afrobeats Hit", price: "MK 5,000", audio: "beats/afrobeats.mp3" },
    { id: 2, name: "Trap Vibes", price: "MK 4,000", audio: "beats/trap.mp3" },
    { id: 3, name: "R&B Smooth", price: "MK 6,000", audio: "beats/rnb.mp3" },
  ];

  return (
    <div className="App">
      <header className="header">
        <h1>RB Beats</h1>
        <p>Your go-to beats store</p>
      </header>

      <main className="beats-list">
        {beats.map((beat) => (
          <div key={beat.id} className="beat-card">
            <h2>{beat.name}</h2>
            <p>Price: {beat.price}</p>
            <audio controls>
              <source src={beat.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <button onClick={() => alert(`Purchasing ${beat.name}`)}>Buy Now</button>
          </div>
        ))}
      </main>

      <footer className="footer">
        <p>&copy; 2025 RB Beats. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
