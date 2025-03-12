import {Link} from 'react-router-dom';

function ScoresCard({ game }) {
  return (
    <>
        <div className="container">
            <div className="card mb-3" >
            <div className="card-header">
                {game.name}
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    <img src={game.competitions[0].competitors[0].}/>
                    {game.competitions[0].competitors[0].team.name} {game.competitions[0].competitors[0].score} - {game.competitions[0].competitors[1].team.name} {game.competitions[0].competitors[1].score}</h5>
                <p className="card-text">{game.gameClock}</p>
                <p className="card-text"><small className="text-muted">{`Last Updated: ${game.lastUpdated}`}</small></p>
            </div>
            </div>
        </div>
    </>
  )
}

export default ScoresCard;