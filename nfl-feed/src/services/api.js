const URL = "https://site.api.espn.com/apis/site/v2/sports/football/nfl/news";

export const getAllArticles = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data.articles;
}

