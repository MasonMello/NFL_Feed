import React from 'react';
import "../css/NavBar.css"
import {Link} from 'react-router-dom';
import websitelogo from "../css/nfl-logo.svg.png"

function NavBar() {
  return (
    <nav className="left-navbar">
      <ul style={{fontSize : "1.25em"}}>
        <img src={websitelogo} alt="websitelogo" style={{objectFit: "contain", width: "100%"}} />
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
        <Link to={"/scores"}>Scores</Link>
        </li>
        <li>
          <a href={"/"}>News</a>
        </li>
        <li>
          <a href="/teams">Teams</a>
        </li>
        <li>
          <a href="#">More</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;