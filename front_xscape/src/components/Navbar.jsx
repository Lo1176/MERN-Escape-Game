import React from 'react';
import useFetch from '../hooks/useFetch';
import logo from "./../assets/images/logo-esc.png";

const Navbar = () => {
  const url = `${process.env.DB_URL + process.env.DB_PORT}/check`
  // const {data, loading, error} = useFetch(url,"GET")
  console.log(process.env.DB_PORT)


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

          <p></p>

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
