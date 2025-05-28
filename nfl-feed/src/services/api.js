const abreviations = [{"nfl" : "football"}, {"nba" : "basketball"}, {"mlb" : "baseball"}, {"nhl" : "hockey"}];


function findSport(sport){
  let sportName = "";
  const foundSport = abreviations.find((element) => Object.keys(element)[0] === sport);
  if(foundSport){
    sportName = foundSport[sport];
  }
  return sportName;
}

const articlesURL =
  'https://site.api.espn.com/apis/site/v2/sports/';

export const getAllArticles = async (sport) => {
  let sportName = findSport(sport);
  const completeArticlesURL = `${articlesURL}${sportName}/${sport}/news`;
  const response = await fetch(completeArticlesURL, {
    mode: 'cors',
  });
  const data = await response.json();
  return data.articles;
};

const teamsURL = 'https://site.api.espn.com/apis/site/v2/sports/';
export const getAllTeams = async (sport) => {
  let sportName = findSport(sport);
  const completeTeamsURL = `${teamsURL}${sportName}/${sport}/teams`;
  const response = await fetch(completeTeamsURL, {
    mode: 'cors',
  });
  const data = await response.json();
  return data.sports[0].leagues[0].teams;
};

const teamURL = 'https://site.api.espn.com/apis/site/v2/sports/';
export const getTeam = async (sport, teamID) => {
  let sportName = findSport(sport);
  const completeTeamURL = `${teamURL}${sportName}/${sport}/teams/${teamID}`;
  const response = await fetch(completeTeamURL, {
    mode: 'cors',
  });
  const data = await response.json();
  return data;
}

const scoresURL =
  'https://site.api.espn.com/apis/site/v2/sports/';
export const getGames = async (sport) => {
  let sportName = findSport(sport);
  const completeScoresURL = `${scoresURL}${sportName}/${sport}/scoreboard`;
  console.log(completeScoresURL);
  const response = await fetch(completeScoresURL, {
    mode: 'cors',
  });
  const data = await response.json();
  return data.events;
};


const ARTICLE_PROXY_URL = 'https://nfl-feed.onrender.com/api/article';

export const getArticle = async (sport, articleID) => {
  const response = await fetch(`${ARTICLE_PROXY_URL}/${articleID}`);
  const data = await response.json();
  return data;
};
