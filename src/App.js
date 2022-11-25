import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom'
import Home from './pages/home'
import TopAnime from './pages/topanime'
import TopManga from './pages/topmanga'
import About from './pages/about'
import DetailAnime from './pages/detailanime'
import DetailManga from './pages/detailmanga'
import BottomNav from './components/BottomNav'
import './App.css'
function App() {
  return (
   <BrowserRouter>
      <header className="App-header">
      <h1>MAL Jadi-jadian</h1>
      
      </header>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/anime' element={<TopAnime/>} /> 
        <Route path='/manga' element={<TopManga/>} /> 
        <Route path='/tentang' element={<About/>} /> 
        <Route path='/detailanime/:malid' element={<DetailAnime/>} /> 
        <Route path='/detailmanga/:malid' element={<DetailManga/>} /> 
        
      </Routes>
      <footer>
        <BottomNav/>
      </footer>

      </BrowserRouter>
   
  );
}

export default App;
