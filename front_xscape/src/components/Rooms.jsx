import React from "react";
import useFetch from "../hooks/useFetch";

const Rooms = () => {
  // get all rooms
  const URL = "http://localhost:5000/rooms";
  const { data, loading, error } = useFetch(URL, "GET");

  return (
    <>
      <div className="container">
        <div id="rooms" className="row justify-content-center">
          {loading === false &&
            data?.map((room) => (
              <div key={room._id} className="card col-lg-3 m-3 col-md-4">
                <img
                  src={room.img}
                  className="card-img-top"
                  alt={room.name + " image"}
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{room.name}</h5>
                  <p className="card-text">{room.description}</p>
                  <div className="d-flex justify-content-between align-item-center">
                    <a
                      href={"/room/" + room._id}
                      className="btn btn-secondary "
                    >
                      Plus d'info
                    </a>
                    <img
                      src={"./../../public/images/PEGI_" + room.age + ".png"}
                      alt={"PEGI_age_" + room.age}
                      className="rooms__pegi-img"
                    ></img>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Rooms;
