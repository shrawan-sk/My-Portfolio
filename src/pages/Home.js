import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>This is a brief mission statement.</p>
      <a href="/about" className="btn">Learn more about me</a>
    </div>
  );
}

export default Home;
