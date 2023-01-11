import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"


function App() {
 

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/SignIn" element={<SignIn />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
