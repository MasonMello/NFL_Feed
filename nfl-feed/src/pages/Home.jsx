import { useState, useEffect } from "react";
import { getAllArticles } from "../services/api";
import ArticleCard from "../components/ArticleCard";
import "../css/Home.css";

function Home({sport}){
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    
    useEffect(()=> {
        const loadLatestArticles = async () => {
            try{
                setLoading(true);
                if(sport = undefined || sport === null || sport === ""){
                    sport = "nfl";
                }
                const latestArticles = await getAllArticles(sport);
                setArticles(latestArticles);
                setError(null);
            }catch(err){
                setError("Failed to load articles")
                console.log(err);
            }finally{
                setLoading(false);
                console.log("Sport: ", sport);
                console.log("Article fetch complete");
            }
        }
        loadLatestArticles();
    }, []) //runs use effect when page first loads

    return(
        <div className="home">
            <div className="container">
                <div className="article-grid">
                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                    {articles.map((article, index) => (
                        <ArticleCard article={article} sport={sport} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;