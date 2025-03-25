import "../css/TopNavBar.css"
import espnlogo from "../css/ESPN-Logo.png"

function TopNavBar() {
    return (
      <nav className="top-navbar">
        <div className="top-navbar-container">
          <img src={espnlogo} alt="espnlogo" className="espnlogo" />
          <ul>
            <li>
              <a href="#">NFL</a>
            </li>
            <li>
              <a href="#">NBA</a>
            </li>
            <li>
              <a href="#">MLB</a>
            </li>
            <li>
              <a href="#">MLS</a>
            </li>
            <li>
              <a href="#">NHL</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  export default TopNavBar;