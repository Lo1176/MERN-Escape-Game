import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import SignUp from "./pages/SignUp"

function App() {
 

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/SignUp" element={<SignUp />}/>
      </Routes>
    </div>
  )
}

export default App
