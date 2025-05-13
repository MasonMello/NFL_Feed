import React from 'react';
import "../css/NavBar.css"
import {Link, useLocation} from 'react-router-dom';
const logos = {
  "nfl": '/logos/nfl.png',
  "nba": '/logos/nba.png',
  "mlb": '/logos/mlb.png',
  "nhl": '/logos/nhl.png'
};

function NavBar() {
  const location = useLocation();
  const currentRoute = location.pathname;
  let sport = currentRoute.split('/')[1];

  return (
    <nav className="left-navbar">
      <ul style={{fontSize : "1.25em"}}>
        <img src={logos[sport]} alt="websitelogo" style={{objectFit: "contain", width: "100%"}} />
        <li>
          <Link to={sport}>Home</Link>
        </li>
        <li>
        <Link to={`${sport}/scores`}>Scores</Link>
        </li>
        <li>
          <Link to={`/${sport}/`}>News</Link>
        </li>
        <li>
          <Link to={`/${sport}/teams`}>Teams</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;