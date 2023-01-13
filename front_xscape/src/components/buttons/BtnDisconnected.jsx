import React from 'react';

const BtnDisconnected = () => {
    return (
        <div>
            <div className="button">
              <a className="btn btn-primary m-1" href="/history">
                Historique
              </a>
              <a className="btn btn-dark m-1"
                onClick={() => window.localStorage.clear()}
                href="/"
              
              >
                Se déconnecter
              </a>
            </div>
        </div>
    );
}

export default BtnDisconnected;
