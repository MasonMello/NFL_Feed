const articlesURL =
  'https://site.api.espn.com/apis/site/v2/sports/football/nfl/news';

export const getAllArticles = async () => {
  const response = await fetch(articlesURL, {
    mode: 'cors',
  });
  const data = await response.json();
  return data.articles;
};

const scoresURL =
  'https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard';
export const getGames = async () => {
  const response = await fetch(scoresURL, {
    mode: 'cors',
  });
  const data = await response.json();
  return data.events;
};

const ARTICLE_PROXY_URL = 'http://localhost:5000/api/article';

export const getArticle = async (articleID) => {
  const response = await fetch(`${ARTICLE_PROXY_URL}/${articleID}`);
  const data = await response.json();
  return data;
};
