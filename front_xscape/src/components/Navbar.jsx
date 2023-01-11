import React from 'react';
import logo from "./../assets/images/logo-esc.png";



const Navbar = () => {
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
          <a className="text-light" href="/signout">se connecter</a>
        </nav>
      </div>
    );
}

export default Navbar;
