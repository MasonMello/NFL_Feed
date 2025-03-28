import "../css/TopNavBar.css"
import espnlogo from "../css/ESPN-Logo.png"

function TopNavBar() {
    return (
      <nav className="top-navbar">
        <div className="top-navbar-container">
          <img src={espnlogo} alt="espnlogo" className="espnlogo" />
          <ul>
            <li>
              <a href="/nfl/">NFL</a>
            </li>
            <li>
              <a href="/nba/">NBA</a>
            </li>
            <li>
              <a href="/mlb/">MLB</a>
            </li>
            <li>
              <a href="/nhl/">NHL</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  export default TopNavBar;