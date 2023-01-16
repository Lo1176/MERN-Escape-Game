import React from "react";

const HistoryCards = () => {
  return (
    <div className="history-cards container">
      <div className="justify-content-center">
        {/* {CONDITION &&
            // ITERER ICI
              TABLEAU_d'_INFOS.map((INFO) => ( */}
        <div key="" className="card d-flex flex-row col-lg-3 m-3 col-md-4">
          <img
            src="https://thechive.com/wp-content/uploads/2021/02/ghostbuster-cartoons-to-stream-for-free-wheres-my-slimer-cereal-spoon-13.jpg?attachment_cache_bust=3567595&quality=85&strip=info"
            className="card-img-top"
            alt=" image"
          ></img>
          <div className="card-body">
            <h5 className="card-title">
              Vous avez réservé la salle "room.name" pour Mercredi matin
            </h5>
            <p className="card-text">
              Le nombre de participants doit être compris entre: 4 et 10.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCards;
