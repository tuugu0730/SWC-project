import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import './styles/App.css'
import Home from './Home'
import Place from './Place';
import Result from './Result';
import Saved from './Saved';
import Login from './Login';
import Register from './Register';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route path="/Place/:p_id" element={<Place/>}/>
          <Route path="/Result" element={<Result/>}/>
          <Route path="/Saved" element={<Saved/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
        </Routes>
      </Router>
    </>     
  )
}

export default App
