import { useContext } from "react";
import logo from "./../assets/images/logo-esc.png";
import BtnConnected from './buttons/BtnConnected';
import BtnDisconnected from './buttons/BtnDisconnected';
import { UserContext } from './context/UserContext';

const Navbar = () => {
  const {user, setUser} = useContext(UserContext)
  console.log("user " + JSON.stringify(user));

    return (
      <div>
        <nav className="navbar justify-content-between navbar-light bg-primary px-2">
          <a className="navbar-brand" href="/">
            <img
              className="d-inline-block align-top navbar__logo"
              src={logo}
              alt="logo-brand"
            />
          </a>
          <h4 className="text-light m-0">
            {user.isLogged && "Bonjour " + user?.firstName}
          </h4>

          {user.isLogged ? <BtnDisconnected /> : <BtnConnected />}
        </nav>
      </div>
    );
}

export default Navbar;
