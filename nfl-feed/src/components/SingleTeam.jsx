import { getTeam } from '../services/api';
import { useState, useEffect } from 'react';
import "../css/SingleTeam.css"
import React from 'react';

function SingleTeam({sport, teamID }) {
  const [team, setTeam] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTeam = async () => {
      try {
        setLoading(true);
        const teamData = await getTeam(sport,teamID);
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
    <div className="container mt-4 p-4 bg-white shadow rounded statscontainer">
      
      <div className="card mb-5 p-4 shadow-sm " style={{width : "100%"}}>
        <h5 className="card-title text-center mb-3">Overall Record</h5>
        <p className="text-center font-weight-bold h4 mb-3">{team.team.record.items[0].summary}</p>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                {team.team.record.items[0].stats.map((stat, i) => (
                  <th key={i}>{stat.name.replace(/([A-Z])/g, ' $1').trim()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {team.team.record.items[0].stats.map((stat, i) => (
                  <td key={i}>{stat.value}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      

      <div className="row">
        {team.team.record.items.slice(1).map((item, index) => (
          <div key={index} className="col-md-6">
            <div className="card mb-5 p-4 shadow-sm">
              <h5 className="card-title text-center mb-3">{item.description}</h5>
              <p className="text-center font-weight-bold h4 mb-3">{item.summary}</p>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="thead-light">
                    <tr>
                      <th>Stat</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.stats.map((stat, i) => (
                      <tr key={i}>
                        <td>{stat.name.replace(/([A-Z])/g, ' $1').trim()}</td>
                        <td>{stat.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

      <div  style={{backgroundColor: `#${team.team.color}`}}>
        <div className="container stadium">
          <h1>{team.team.franchise.venue.fullName}</h1>
          <img src={team.team.franchise.venue.images[1]?.href || team.team.franchise.venue.images[0].href} alt="" />
          <h3>{`${team.team.franchise.venue.address.city} - ${team.team.franchise.venue.address.state} - ${team.team.franchise.venue.address.zipCode}`}</h3>
        </div>
        
      </div>
    </>
    
  )
}

export default SingleTeam;
