import React from "react";
import "./Navigation.css";

const Navigation = (props) => {
  return (
    <header className="main-header">
      <h1>Vstats</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Leaderboard</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
