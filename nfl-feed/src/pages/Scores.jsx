import { useState, useEffect } from "react";
import { getAllArticles } from "../services/api";
import ArticleCard from "../components/ArticleCard";
import NavBar from "../components/NavBar";
import ScoresCard from "../components/ScoresCard";
import { getGames } from "../services/api";
import "../css/Games.css"

function Scores({sport}){
    const [games, setGames] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        const loadLatestGames = async () => {
            try{
                setLoading(true);
                const latestGames = await getGames(sport);
                setGames(latestGames);
                setError(null);
            }catch(err){
                setError("Failed to load games")
                console.log(err);
            }finally{
                setLoading(false);
                console.log("Game fetch complete");
            }
        }
        loadLatestGames();
    }, []) //runs use effect when page first loads

    return(
        <div className="games">
            <div className="container">
                <div className="game-grid">
                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                    <h1 className="fs-1 d-flex justify-content-center align-items-center">Latest Scores</h1>
                    {games.map((game, index) => (
                        <ScoresCard game={game} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Scores;