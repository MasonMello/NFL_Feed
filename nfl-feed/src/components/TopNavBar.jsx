import "../css/TopNavBar.css"
import espnlogo from "../css/ESPN-Logo.png"

function TopNavBar() {
    return (
      <nav className="top-navbar">
        <div className="top-navbar-container">
          <img src={espnlogo} alt="espnlogo" className="espnlogo" />
          <ul>
            <li>
              <Link to="/nfl/">NFL</Link>
            </li>
            <li>
              <Link to="/nba/">NBA</Link>
            </li>
            <li>
              <Link to="/mlb/">MLB</Link>
            </li>
            <li>
              <Link to="/nhl/">NHL</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  export default TopNavBar;