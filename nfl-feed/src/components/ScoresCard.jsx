import React from "react";
import "../css/ScoresCard.css";

function ScoresCard({ game }) {
  const competition = game.competitions[0];
  const team1 = competition.competitors[0];
  const team2 = competition.competitors[1];

  return (
    <div className="container d-flex justify-content-center">
      <div className="card scores-card border-0 shadow-lg p-3">

        {/* Top Info Row */}
        <div className="container d-flex justify-content-between px-3 text-secondary">
          <span>{`${game.league?.abbreviation || "Game"} · ${new Date(competition.date).toLocaleString("en-US", {
            month: "numeric",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
            timeZoneName: "short",
          })}`}</span>
          <span className="fw-semibold">{competition.status.type.detail}</span>
        </div>

        {/* Teams & Score Row */}
        <div className="holder mt-4">
          {/* Team 1 */}
          <div className="team">
            <img
              src={team1.team?.logo}
              alt="Team 1 Logo"
              className="team-logo"
            />
            <span
              className="fs-5 fw-semibold mt-2 medium"
              style={{ color: `#${team1.team?.color}` }}
            >
              {team1.team?.name}
            </span>
            <small className="text-secondary small">
              ({team1.records?.[0]?.summary || "No record"})
            </small>
          </div>

          {/* Score */}
          <div className="score mx-4">
            {team1.score} - {team2.score}
          </div>

          {/* Team 2 */}
          <div className="team">
            <img
              src={team2.team?.logo}
              alt="Team 2 Logo"
              className="team-logo"
            />
            <span
              className="fs-5 fw-semibold mt-2 medium"
              style={{ color: `#${team2.team?.color}` }}
            >
              {team2.team?.name}
            </span>
            <small className="text-secondary small">
              ({team2.records?.[0]?.summary || "No record"})
            </small>
          </div>
        </div>

        {/* Optional Notes */}
        {competition.notes?.[0]?.headline && (
          <p className="text-center text-secondary mt-3">
            {competition.notes[0].headline}
          </p>
        )}
      </div>
    </div>
  );
}

export default ScoresCard;
