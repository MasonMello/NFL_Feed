import React from "react";
import "../css/ScoresCard.css";

function ScoresCard({ game }) {
  const comp = game.competitions[0];
  const team1 = comp.competitors[0];
  const team2 = comp.competitors[1];

  console.log("Team 1 logo:", team1.team?.logo);
console.log("Team 2 logo:", team2.team?.logo);


  return (
    <div className="container d-flex justify-content-center">
      <div className="card scores-card border-0 shadow-lg p-3">

        <div className="container d-flex justify-content-between px-3 text-secondary">
          <span>{`${game.league?.abbreviation ?? "Game"} · ${new Date(comp.date).toLocaleDateString()}`}</span>
          <span className="fw-semibold">{comp.status?.type?.shortDetail ?? ""}</span>
        </div>

        {/* Logos and Score Row */}
<div className="holder mt-4">
  <div className="team">
    <img
      src={team1.team?.logo}
      alt="Team 1 Logo"
      className="team-logo"
    />
  </div>
  

  <div className="score mx-4">
    {team1.score} - {team2.score}
  </div>

  <div className="team">
    <img
      src={team2.team?.logo}
      alt="Team 2 Logo"
      className="team-logo"
    />
  </div>
</div>

{/* Names Row */}
<div className="holder mt-2">
  <div className="team">
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

  <div className="team" style={{ visibility: 'hidden' }}>
    {/* empty div to center spacing with 3 columns */}
  </div>

  <div className="team">
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
