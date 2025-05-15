import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, useParams } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import SingleArticle from './components/SingleArticle'
import Scores from './pages/Scores'
import Teams from './pages/Teams'
import SingleTeam from './components/SingleTeam'
import TopNavBar from './components/TopNavBar'

function ArticleWrapper() {
  const { id } = useParams();
  return <SingleArticle articleID={id} />;
}

function TeamWrapper(){
  const { id, sport } = useParams();
  return <SingleTeam sport={sport} teamID={id} />;
}

function HomeWrapper(){
  const { sport } = useParams();
  return <Home/>;
}

function TeamsWrapper(){
  const { sport } = useParams();
  return <Teams sport={sport}/>
} 

function ScoresWrapper(){
  const { sport } = useParams();
  return <Scores sport={sport}/>
}

function NavWrapper(){
  const {sport} = useParams();
  return <NavBar sport={sport}/>
}

function App() {
  return(
    <div className='app'>
      <div className="topnavbarcontainer">
          <TopNavBar/>
      </div>
      <div className="sport-view " style={{paddingTop: "70px", paddingLeft: "0px",display: "flex" , justifyContent: "center"}}>
        <div className="navbar-container">
          <NavWrapper/>
        </div>
        <main>
          <Routes>
            <Route path='/:sport/' element={<HomeWrapper/>}/>
            <Route path='/:sport/article/:id' element={<ArticleWrapper/>}/>
            <Route path='/:sport/scores' element={<ScoresWrapper/>}/>
            <Route path='/:sport/teams' element={<TeamsWrapper/>}/>
            <Route path='/:sport/team/:id' element={<TeamWrapper/>}/>
          </Routes>
        </main>
      </div>
    </div>
    
  )
}

export default App