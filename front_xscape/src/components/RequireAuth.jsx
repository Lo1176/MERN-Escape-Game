import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";

// HOC => https://fr.reactjs.org/docs/higher-order-components.html
export default function RequireAuth({ children, withAuth }) {
  const { user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token !== null) {
      fetch("http://localhost:5000/checkToken", {
        method: "GET",
        headers: { authorization: token },
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.msg === "token ok") {
            setUser({
              isLogged: true,
              infos: res.user
            });
          }else if (res.msg === "bad token") {
            localStorage.removeItem('token')
          } else (
            setRedirect(true)
          )
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (withAuth) {
        setRedirect(true);
    }
  }, []);

  if (redirect) {
    return <Navigate to="/signin" />;
  }

  return (
    <>
      {children}
    </>)
};

