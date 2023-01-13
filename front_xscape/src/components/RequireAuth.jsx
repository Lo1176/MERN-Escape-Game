import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";

// HOC => https://fr.reactjs.org/docs/higher-order-components.html
export default function RequireAuth({ children, withAuth }) {
  const { user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    console.log("token " + token);
    if (token !== null) {
      fetch("http://localhost:5000/checkToken", {
        method: "GET",
        headers: { authorization: token },
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
        //   console.log("------------")  
        //   console.log("requireAuth :")
        //   console.log(res);
        //   console.log("------------")
          if (res.status === 200) {
            setUser({
              isLogged: true,
              infos: res.user
            });
          } else {
            setRedirect(true);
          }
        })
        // .catch((err) => {
        //   console.log(err);
        // });
    } else {
        if (withAuth) {
            setRedirect(true);
        }
    }
  }, []);
  if (redirect) {
    return <Navigate to="/signin" />;
  }

  return <>{children}</>;
};

