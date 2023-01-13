import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './components/context/UserContext'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import bootstrap from "bootstrap";
// import dotenv from "dotenv"
// dotenv.config({ path: "./../../.env" })




// import './custom.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <UserProvider >
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
