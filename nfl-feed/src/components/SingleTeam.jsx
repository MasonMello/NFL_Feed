import { getTeam } from '../services/api';
import { useState, useEffect } from 'react';
import "../css/SingleTeam.css"

function SingleTeam({ teamID }) {
  const [team, setTeam] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTeam = async () => {
      try {
        setLoading(true);
        const teamData = await getTeam(teamID);
        console.log(teamData);
        setTeam(teamData);
        setError(null);
      } catch (err) {
        setError('Failed to load team');
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    loadTeam();
  }, []);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return(
    <>
      <div className='content' style={{backgroundColor : `#${team.team.color}`}}>
      <div className="singleTeam">
        <img className='container hero' src={team.team.logos[0].href} alt="" />
        <h1 className='container display1' style={{color : `#${team.team.alternateColor}`, backgroundColor : `#${team.team.color}`}}>{team.team.displayName}</h1>
      </div>
    </div>
    <div className="info">
        <h1 style={{color: "black"}}>{team.team.standingSummary}</h1>
      
    </div>
    </>
    
  )
}

export default SingleTeam;
