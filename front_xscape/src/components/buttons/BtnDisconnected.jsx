import { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const BtnDisconnected = () => {
  const {user, setUser} = useContext(UserContext)
  const [redirect, setRedirect] = useState(false)

  function handleDisconnexion() {
    localStorage.removeItem('token')
    setUser({
      isLogged: false,
      infos: null
    })
    setRedirect(true) 
    
  }
  if (redirect){
    return <Navigate to="/"/>
  }

    return (
        <div>
            <div className="button">
              <a className="btn btn-primary m-1" href="/history">
                Historique
              </a>
              <a className="btn btn-dark m-1"
                onClick={handleDisconnexion}
                href="/"
              
              >
                Se déconnecter
              </a>
            </div>
        </div>
    );
}

export default BtnDisconnected;
