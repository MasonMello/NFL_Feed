import { getTeam } from '../services/api';
import { useState, useEffect } from 'react';
import "../css/SingleTeam.css";
import React from 'react';

function SingleTeam({ sport, teamID }) {
  const [team, setTeam] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTeam = async () => {
      try {
        setLoading(true);
        const teamData = await getTeam(sport, teamID);
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
  if (!team || !team.team) return <p>No team data available</p>;

  const { team: teamInfo } = team;
  const bgColor = teamInfo.color || "cccccc";
  const altColor = teamInfo.alternateColor || "000000";
  const logo = teamInfo.logos?.[0]?.href;

  return (
    <>
      <div className='content' style={{ backgroundColor: `#${bgColor}` }}>
        <div className="singleTeam">
          {logo && <img className='container hero' src={logo} alt="Team Logo" />}
          <h1 className='container display1' style={{ color: `#${altColor}`, backgroundColor: `#${bgColor}` }}>
            {teamInfo.displayName || "Unknown Team"}
          </h1>
        </div>
      </div>

      <div className="info">
        <h1 style={{ color: "black" }}>{teamInfo.standingSummary || "Standing information not available"}</h1>
      </div>

      <div className="container mt-4 p-4 bg-white shadow rounded statscontainer">
        <div className="card mb-5 p-4 shadow-sm" style={{ width: "100%" }}>
          <h5 className="card-title text-center mb-3">Overall Record</h5>
          {teamInfo.record?.items?.[0]?.summary ? (
            <p className="text-center font-weight-bold h4 mb-3">{teamInfo.record.items[0].summary}</p>
          ) : (
            <p className="text-muted text-center">No overall record available - CHECK BACK NEXT SEASON!</p>
          )}
          {teamInfo.record?.items?.[0]?.stats?.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="thead-light">
                  <tr>
                    {teamInfo.record.items[0].stats.map((stat, i) => (
                      <th key={i}>{stat.name.replace(/([A-Z])/g, ' $1').trim()}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {teamInfo.record.items[0].stats.map((stat, i) => (
                      <td key={i}>{stat.value}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-muted text-center">No stats available</p>
          )}
        </div>

        <div className="row">
          {teamInfo.record?.items?.length > 1 &&
            teamInfo.record.items.slice(1).map((item, index) => (
              <div key={index} className="col-md-6">
                <div className="card mb-5 p-4 shadow-sm">
                  <h5 className="card-title text-center mb-3">{item.description || "Additional Stats"}</h5>
                  <p className="text-center font-weight-bold h4 mb-3">{item.summary || "N/A"}</p>
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead className="thead-light">
                        <tr>
                          <th>Stat</th>
                          <th>Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.stats?.map((stat, i) => (
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

      <div style={{ backgroundColor: `#${bgColor}` }}>
        {teamInfo.franchise?.venue ? (
          <div className="container stadium">
            <h1>{teamInfo.franchise.venue.fullName || "Stadium"}</h1>
            <img
              src={
                teamInfo.franchise.venue.images?.[1]?.href ||
                teamInfo.franchise.venue.images?.[0]?.href ||
                "/fallback-image.png"
              }
              alt="Stadium"
            />
            <h3>
              {[
                teamInfo.franchise.venue.address?.city,
                teamInfo.franchise.venue.address?.state,
                teamInfo.franchise.venue.address?.zipCode
              ]
                .filter(Boolean)
                .join(" - ") || "Location unknown"}
            </h3>
          </div>
        ) : (
          <div className="container stadium">
            <h1>Venue information not available</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default SingleTeam;
