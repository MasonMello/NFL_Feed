import React from 'react';
import "../css/NavBar.css"

function NavBar() {
  return (
    <nav className="left-navbar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Scores</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Watch</a>
        </li>
        <li>
          <a href="#">More</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;