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

          <div className='button'>
            <a
              className='btn btn-primary m-1'
              href='/signin'>Se connecter</a>
            <a 
              className='btn btn-dark m-1'
              href='/signup'>S'inscrire</a>
          </div>
          
        </nav>
      </div>
    );
}

export default Navbar;
