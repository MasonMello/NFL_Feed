import { useState, useEffect } from "react";
import { getAllTeams } from "../services/api";
import ArticleCard from "../components/ArticleCard";
import TeamCard from "../components/TeamCard";
import NavBar from "../components/NavBar";

function Teams({sport}){
    const [teams, setTeams] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        const loadTeams = async () => {
            try{
                setLoading(true);
                const teams = await getAllTeams(sport);
                setTeams(teams);
                setError(null);
            }catch(err){
                setError("Failed to load teams")
                console.log(err);
            }finally{
                setLoading(false);
                console.log("Teams fetch complete");
            }
        }
        loadTeams();
    }, []) //runs use effect when page first loads

    
    return(
        <div className="teams" style={{width: "100%"}}>
            <div className="container">
                <div className="team-grid" style={{width: "100%"}}>
                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                    <div className="team">
                        <div className="row">
                        {teams.map((team, index) => (
                            <TeamCard sport={sport} team={team.team} key={index} />
                        ))}
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Teams;