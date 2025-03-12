import React from 'react';
import "../css/NavBar.css"
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <nav className="left-navbar">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
        <Link to={"/scores"}>Scores</Link>
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