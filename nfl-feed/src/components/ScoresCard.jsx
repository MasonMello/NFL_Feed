import React from "react";
import "../css/ScoresCard.css";

function ScoresCard({ game }) {
  const comp = game.competitions[0];
  const team1 = comp.competitors[0];
  const team2 = comp.competitors[1];

  return (
    <div className="container d-flex justify-content-center">
      <div className="card scores-card border-0 shadow-lg p-3">

        <div className="container d-flex justify-content-between px-3 text-secondary">
          <span>{`${game.league?.abbreviation ?? "Game"} · ${new Date(comp.date).toLocaleDateString()}`}</span>
          <span className="fw-semibold">{comp.status?.type?.shortDetail ?? ""}</span>
        </div>

        <div className="d-flex align-items-center justify-content-around text-white mt-3">

          {/* Team 1 */}
          <div className="team text-center container">
            <img
              src={team1.team?.logo}
              alt="Team 1 Logo"
              style={{ width: "60px", height: "60px", objectFit: "contain" }}
            />
            <span
              className="fs-5 fw-semibold mt-2 medium"
              style={{ color: `#${team1.team?.color ?? 'ffffff'}` }}
            >
              {team1.team?.name}
            </span>
            <small className="text-secondary small">
              ({team1.records?.[0]?.summary ?? "No record"})
            </small>
          </div>

          {/* Score */}
          <div className="score fs-2 fw-bold text-white text-center mx-3">
            {team1.score} - {team2.score}
          </div>

          {/* Team 2 */}
          <div className="team text-center container">
            <img
              src={team2.team?.logo}
              alt="Team 2 Logo"
              style={{ width: "60px", height: "60px", objectFit: "contain" }}
            />
            <span
              className="fs-5 fw-semibold mt-2 medium"
              style={{ color: `#${team2.team?.color ?? 'ffffff'}` }}
            >
              {team2.team?.name}
            </span>
            <small className="text-secondary small">
              ({team2.records?.[0]?.summary ?? "No record"})
            </small>
          </div>
        </div>

        {comp.notes?.[0]?.headline && (
          <p className="text-center text-secondary mt-3">
            {comp.notes[0].headline}
          </p>
        )}
      </div>
    </div>
  );
}

export default ScoresCard;
