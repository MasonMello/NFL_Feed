import "../css/TopNavBar.css"
import espnlogo from "../css/ESPN-Logo.png"
import { Link } from "react-router-dom";


function TopNavBar() {
    return (
      <nav className="top-navbar">
        <div className="top-navbar-container">
          <img src={espnlogo} alt="espnlogo" className="espnlogo" />
          <ul>
            <li>
              <Link to="/nfl/" reloadDocument >NFL</Link>
            </li>
            <li>
              <Link to="/nba/" reloadDocument >NBA</Link>
              {/* <a href="/nba">NBA</a> */}
            </li>
            <li>
              <Link to="/mlb/" reloadDocument >MLB</Link>
              {/* <a href="/mlb">MLB</a> */}
            </li>
            <li>
              <Link to="/nhl/" reloadDocument >NHL</Link>
              {/* <a href="/nhl">NHL</a> */}
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  export default TopNavBar;