import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import SignUp from "./pages/SignUp"
import Room from "./components/Room";
import SignIn from "./pages/SignIn"
import useFetch from "./hooks/useFetch";

function App() {
  const URL = "http://localhost:5000/checktoken"
  const { data, loading, error } = useFetch(URL, "GET")
  console.log(data)
  // useEffect(() => {
  //     setLoading("Loading...")
  //     setData(null)
  //     setError(null)

  //     let fetchParams = {
  //         method: method,
  //         mode: 'cors',
  //         // cache: "no-store",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "authorization": window.localStorage.getItem("token")
  //         },
  //       } 

  //     method !== "GET" &&  (fetchParams.body = JSON.stringify(request))

  //     fetch(url, fetchParams)
  //         .then(res => {
  //             return res.json()})
  //         .then(dt =>{ 
  //             setData(dt)
  //             setLoading(false);
  //         })

  //         .catch (err => {
  //             setError("Une erreur est apparue :" + err)
  //             setLoading(false)
  //         })
  // }, [url])
  console.log(loading)
  if (loading === false &&
    data?.msg === "token ok") {
      window.localStorage.setItem("id", data.user._id);
      const idUser = window.localStorage.getItem("id");
      // console.log("idUser: " + idUser);
      // setToto(idUser);

    }
    // console.log(idUserConnected)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
