import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, useParams } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import SingleArticle from './components/SingleArticle'
import Scores from './pages/Scores'

function ArticleWrapper() {
  const { id } = useParams();
  return <SingleArticle articleID={id} />;
}

function App() {
  return(
    <div className='app'>
    <div className="navbar-container">
      <NavBar />
    </div>
    <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/article/:id' element={<ArticleWrapper/>}/>
          <Route path='/scores' element={<Scores/>}/>
        </Routes>
    </main>
    </div>
    
  )
}

export default App
