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

        {/* Logos and Score */}
        <div className="d-flex justify-content-around align-items-center mt-4">
          <img
            src={team1.team?.logo}
            alt="Team 1 Logo"
            style={{ width: "60px", height: "60px", objectFit: "contain" }}
          />
          <div className="score fs-2 fw-bold text-white text-center">
            {team1.score} - {team2.score}
          </div>
          <img
            src={team2.team?.logo}
            alt="Team 2 Logo"
            style={{ width: "60px", height: "60px", objectFit: "contain" }}
          />
        </div>

        {/* Team Names */}
        <div className="d-flex justify-content-around text-white mt-2">
          <div className="text-center">
            <span
              className="fs-5 fw-semibold"
              style={{ color: `#${team1.team?.color ?? 'ffffff'}` }}
            >
              {team1.team?.name}
            </span>
            <div className="small text-secondary">
              {team1.records?.[0]?.summary ?? "No record"}
            </div>
          </div>

          <div className="text-center">
            <span
              className="fs-5 fw-semibold"
              style={{ color: `#${team2.team?.color ?? 'ffffff'}` }}
            >
              {team2.team?.name}
            </span>
            <div className="small text-secondary">
              {team2.records?.[0]?.summary ?? "No record"}
            </div>
          </div>
        </div>

        {/* Notes */}
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
