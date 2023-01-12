import React from 'react';

const BtnConnected = () => {
    return (
        <div>
            <div className="button">
              <a className="btn btn-primary m-1" href="/signin">
                Se connecter
              </a>
              <a className="btn btn-dark m-1" href="/signup">
                S'inscrire
              </a>
            </div>
        </div>
    );
}

export default BtnConnected;
