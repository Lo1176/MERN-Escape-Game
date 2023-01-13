import React from "react";
import useFetch from "../hooks/useFetch";
const pathImages = '../assets/images/'

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

                <img
                  // src={require('./../assets/images/PEGI_' + room.age + '.png')}
                  src={'./../assets/images/PEGI_' + room.age + '.png'}
                  className="pegi-image"
                  alt={"PEGI_age_:_" + room.age}
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{room.name}</h5>
                  <p className="card-text">{room.description}</p>
                  <a href={"/room/" + room._id} className="btn btn-primary ">
                    Plus d'info
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Rooms;
