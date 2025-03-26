import "../css/TeamCard.css";
import { Link } from "react-router-dom";

function TeamCard({ sport, team }) {
  console.log(team);
  return (
    <div className="col-md-4 team">
      <Link to={`/${sport}/team/${team.abbreviation}`} className="team-link">
        <div className="card team-card" style={{ backgroundColor: `#${team.color}`, position: "relative" }}>
          <img className="team-logo" src={team.logos[1].href} alt="Team logo" />
          <div className="card-body text-bottom">
            <h1 className="team-name text-overlay">{team.displayName}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default TeamCard;
