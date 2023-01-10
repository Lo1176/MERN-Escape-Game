import React from 'react';
import logo from "./../assets/images/logo-esc.png";



const Navbar = () => {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img
              className="d-inline-block align-top navbar__logo"
              src={logo}
              alt="logo-brand"
            />
          </a>
          <a href='/signout'>se connecter</a>
        </nav>
      </div>
    );
}

export default Navbar;
