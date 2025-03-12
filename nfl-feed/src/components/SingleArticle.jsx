import { getArticle } from '../services/api';
import { useState, useEffect } from 'react';

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
      setStory(doc.body.innerHTML);
    } else {
      setStory(null); // or a suitable fallback state
    }
  }, [article]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  //console.log(article);

  return <div dangerouslySetInnerHTML={{ __html: story }} />;
}

export default SingleArticle;
