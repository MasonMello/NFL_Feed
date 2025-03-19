import { getArticle } from '../services/api';
import { useState, useEffect } from 'react';
import "../css/SingleArticle.css"

function SingleArticle({ articleID }) {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [story, setStory] = useState('');

  useEffect(() => {
    const loadArticle = async () => {
      try {
        setLoading(true);
        const articleData = await getArticle(articleID);
        console.log(articleData);
        setArticle(articleData);

        setError(null);
      } catch (err) {
        setError('Failed to load article');
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    loadArticle();
  }, []);

  useEffect(() => {
    if (article?.headlines?.[0]?.story) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(
        article.headlines[0].story,
        'text/html'
      );
  
      // Disable all links in the story
      const links = doc.querySelectorAll('a');
      links.forEach((link) => {
        link.removeAttribute('href');
        link.style.color = 'inherit';
        link.style.textDecoration = 'none';
        link.style.cursor = 'default';
      });
  
      setStory(doc.body.innerHTML);
    } else {
      setStory(null); // or a suitable fallback state
    }
  }, [article]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  //return <div dangerouslySetInnerHTML={{ __html: story }} />;
  return(
    <div className='container'>
      <div className="content">
        <h1 className='header'>{article.headlines[0].headline}</h1>
        <img className='hero' src={article.headlines[0].images[0].url} alt="" />
        <div dangerouslySetInnerHTML={{ __html: story }} />
      </div>
      
    </div>
  )
}

export default SingleArticle;
