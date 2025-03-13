import React from "react";
import "../css/ScoresCard.css"

function ScoresCard({ game }) {
  return (
    <div className="container d-flex justify-content-center">
      <div className="card scores-card border-0 shadow-lg p-3">
        
        <div className="container d-flex justify-content-between px-3 text-secondary">
          <span>{`NFL · ${game.competitions[0].date}`}</span>
          <span className="fw-semibold">{game.competitions[0].status.type.detail}</span>
        </div>
        
        <div className="d-flex holder align-items-center justify-content-around text-white mt-3">
          
          <div className="team text-center container">
            <img
              src={game.competitions[0].competitors[0].team.logo}
              alt="Team 1 Logo"
              className="team-logo"
            />
            <span className="fs-5 fw-semibold mt-2 medium" style={{ color: `#${game.competitions[0].competitors[0].team.color}` }}>
              {game.competitions[0].competitors[0].team.name}
            </span>
            <small className="text-secondary small">
              ({game.competitions[0].competitors[0].records[0].summary})
            </small>
          </div>

          <div className="score fs-1 fw-bold text-white container large d-flex justify-content-center align-items-center">
            {game.competitions[0].competitors[0].score} - {game.competitions[0].competitors[1].score}
          </div>

          <div className="team text-center container">
            <img
              src={game.competitions[0].competitors[1].team.logo}
              alt="Team 2 Logo"
              className="team-logo"
            />
            <span className="fs-5 fw-semibold mt-2 medium" style={{ color: `#${game.competitions[0].competitors[1].team.color}` }}>
              {game.competitions[0].competitors[1].team.name}
            </span>
            <small className="text-secondary small">
              ({game.competitions[0].competitors[1].records[0].summary})
            </small>
          </div>
        </div>

        <p className="text-center text-secondary mt-3">
          {game.competitions[0].notes.headline}
        </p>
      </div>
    </div>
  );
}

export default ScoresCard;