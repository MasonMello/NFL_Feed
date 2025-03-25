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
  const { id } = useParams();
  return <SingleTeam teamID={id} />;
}

function App() {
  return(
    <div className='app'>
      <div className="top-navbar-container">
          <TopNavBar/>
      </div>
      <div className="sport-view container" style={{paddingTop: "70px"}}>
        <div className="navbar-container">
          <NavBar />
        </div>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/article/:id' element={<ArticleWrapper/>}/>
            <Route path='/scores' element={<Scores/>}/>
            <Route path='/teams' element={<Teams/>}/>
            <Route path='team/:id' element={<TeamWrapper/>}/>
          </Routes>
        </main>
      </div>
    </div>
    
  )
}

export default App
