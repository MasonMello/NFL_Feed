import "../css/TeamCard.css"

function TeamCard({ team }) {
  return (
    <>
      <div className="col-md-4 team">
        <div className="card mb-3" style={{backgroundColor: `#${team.color}`, borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", height: "250px", alignItems: "center", justifyContent: "center"}}>
          <img className="card-img-top img-fluid" src={team.logos[1].href} alt="Card image cap" style={{objectFit: "cover", height: "200px", borderRadius: "10px 10px 0 0"}}/>
          <div className="card-body d-flex flex-column align-items-center justify-content-center">
            <h1 style={{color: "white", fontSize: "24px", fontWeight: "bold", marginBottom: "10px"}}>{team.displayName}</h1>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default TeamCard;