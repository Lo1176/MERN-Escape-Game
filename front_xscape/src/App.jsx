import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Banner from './components/Banner'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import SignUp from "./pages/SignUp"
import Room from "./components/Room";

function App() {
 

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="/SignUp" element={<SignUp />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
