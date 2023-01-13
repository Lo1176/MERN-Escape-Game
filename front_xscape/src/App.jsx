import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Room from "./components/Room";
import SignIn from "./pages/SignIn";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth withAuth={false}>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/room/:roomId"
          element={
            <RequireAuth withAuth={false}>
              <Room />
            </RequireAuth>
          }
        />
        <Route
          path="/SignUp"
          element={
            <RequireAuth withAuth={false}>
              <SignUp />
            </RequireAuth>
          }
        />
        <Route
          path="/SignIn"
          element={
            <RequireAuth withAuth={false}>
              <SignIn />
            </RequireAuth>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
