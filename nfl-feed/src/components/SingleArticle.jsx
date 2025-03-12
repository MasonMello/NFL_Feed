import { getArticle } from "../services/api";
import { useState, useEffect } from "react";

function SingleArticle({articleID}){
    const [article, setArticle] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadArticle = async () => {
            try {
                setLoading(true);
                const articleData = await getArticle(articleID);
                setArticle(articleData);
                setError(null);
            } catch (err) {
                setError("Failed to load article");
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        loadArticle();
    }, [])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    console.log(article);

    return (
        <>
        <h1>{article.headline}</h1>
        </>
        
    );
}

export default SingleArticle;