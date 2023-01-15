import React from "react";
import useFetch from "../hooks/useFetch";
import { Navigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { useState } from "react";

const Room = () => {
  const { user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  const { roomId } = useParams();
  const url = `http://localhost:5000/rooms/${roomId}`;
  const { data, loading, error } = useFetch(url, "GET");

  const urlReservation = `http://localhost:5000/booking/${roomId}`;
  const reservation = useFetch(urlReservation, "GET");

  function handleReservation(day, time) {
    if (user.isLogged) {
      const urlReserver = `http://localhost:5000/bookings/${roomId}/${day}/${time}/update`;

      const fetchParams = {
        method: "PUT",
        mode: "cors",
        // cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          authorization: window.localStorage.getItem("token"),
        },
        body: JSON.stringify({
          reserved: true,
          userId: user.infos._id,
        }),
      };

      fetch(urlReserver, fetchParams)
        .then((res) => {
          return res.json();
        })
        .then((dt) => {
          setRedirect(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setRedirect(true);
    }
  }

  if (user.isLogged && redirect) {
    return <Navigate to="/history" />;
  } else if (redirect) {
    return <Navigate to="/signin" />;
  }

  return (
    <>
      {loading === false && data !== null ? (
        <div id="room" className="container d-flex justify-content-center p-5">
          <div className="card" style={{ width: "70rem" }}>
            <img
              src={data[0]?.img}
              className="card-img-top"
              alt={data[0]?.name}
            ></img>
            <img
              src={"./../../public/images/PEGI_" + data[0]?.age + ".png"}
              alt={"PEGI_age_" + data[0]?.age}
              className="room__pegi-img"
            ></img>
            <div className="m-4">
              <h5 className="card-title">{data[0].name}</h5>
              <p className="card-text">{data[0].description}</p>
              <div className="container d-flex flex-wrap justify-content-around">
                {reservation.loading === false &&
                  reservation.data?.calendar?.map((reservation) => {
                    return (
                      <div key={reservation.day} style={{ maxWidth: "100px" }}>
                        <h6 className="text-center">{reservation.day.split('-').reverse().join('-')}</h6>
                        <button
                          key={reservation.day + "AM"}
                          className="btn btn-green m-1"
                          style={{ minWidth: "100px" }}
                          disabled={reservation.time.AM.reserved}
                          onClick={(e) =>
                            handleReservation(reservation.day, "AM")
                          }
                        >
                          Matin
                        </button>
                        <button
                          key={reservation.day + "PM"}
                          className="btn btn-green m-1"
                          style={{ minWidth: "100px" }}
                          disabled={reservation.time.PM.reserved}
                          onClick={(e) =>
                            handleReservation(reservation.day, "PM")
                          }
                        >
                          Aprem
                        </button>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}{" "}
    </>
  );
};

export default Room;
