import React from 'react';

const Banner = () => {
    return (
      <div>
        <div
          className="banner"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(https://images.unsplash.com/photo-1549186478-6d9b882e7194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80)"
          }}
        >
          <div className="container">
            <h1>
              <strong>L'Escape Game</strong> ultime pour{" "}
              <strong>les joueurs créatifs</strong>!
            </h1>
            <p>Un escape game comme vous n'en avez jamais vu.</p>
            <a className="btn btn-flat" href="#rooms">
              Apply now
            </a>
          </div>
        </div>
      </div>
    );
}

export default Banner;
