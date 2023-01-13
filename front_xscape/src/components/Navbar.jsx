import React from 'react';
import useFetch from '../hooks/useFetch';
import logo from "./../assets/images/logo-esc.png";
import BtnConnected from './buttons/BtnConnected';
import BtnDisconnected from './buttons/BtnDisconnected';

const Navbar = () => {
  const id = window.localStorage.getItem("id");
  const URL = `http://localhost:5000/users/${id}`
  const user = useFetch(URL, "GET")
  // console.log(user?.data)

    return (
      <div>
        <nav className="navbar navbar-light bg-primary px-2">
          <a className="navbar-brand" href="/">
            <img
              className="d-inline-block align-top navbar__logo"
              src={logo}
              alt="logo-brand"
            />
          </a>
          <h4 className="text-light m-0">
            {user.data?.firstName && "Bonjour " + user.data?.firstName}
          </h4>

          {user.data?.firstName ? <BtnDisconnected /> : <BtnConnected />}
        </nav>
      </div>
    );
}

export default Navbar;
