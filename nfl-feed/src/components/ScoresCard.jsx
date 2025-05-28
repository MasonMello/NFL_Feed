import React from "react";
import "../css/ScoresCard.css"

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

        <div className="d-flex holder align-items-center justify-content-around text-white mt-3">
          {[team1, team2].map((team, idx) => (
            <div key={idx} className="team text-center container">
              <img src={team.team?.logo} alt={`Team ${idx + 1} Logo`} />
              <span className="fs-5 fw-semibold mt-2 medium" style={{ color: `#${team.team?.color ?? 'ffffff'}` }}>
                {team.team?.name}
              </span>
              <small className="text-secondary small">
                ({team.records?.[0]?.summary ?? "No record"})
              </small>
            </div>
          ))}

          <div className="score fs-1 fw-bold text-white container large d-flex justify-content-center align-items-center">
            {team1.score} - {team2.score}
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