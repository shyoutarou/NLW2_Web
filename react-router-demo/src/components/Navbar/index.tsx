import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isAuth, setisAuth] = useState(false);

  const history = useHistory()
  
  const loginUser = () => {
    sessionStorage.setItem("token", "some-login-token");
    setisAuth(!!sessionStorage.getItem("token"));
    history.push("/profile/Vijit");
  };

  const logoutUser = () => {

    sessionStorage.removeItem("token");
    setisAuth(!!sessionStorage.getItem("token"));
    history.push("/");
  };

  return ( 
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink exact className="navbar-item" activeClassName="is-active" to="/">
            Home
          </NavLink>
          <NavLink className="navbar-item" activeClassName="is-active" to="/about">
            About
          </NavLink>
          <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/profile/Vijit"
            >
              Profile 
            </NavLink>
        </div>     
        <div className="navbar-end">
          <div className="navbar-item">
              <div className="buttons">
                    {!isAuth ? (
                        <button className="button is-white" onClick={loginUser}>
                          Log in 
                        </button>                      
                    ) : (
                        <button className="button is-black" onClick={logoutUser}>
                          Log out 
                        </button>
                    )}
              </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  );
 };
 
 export default Navbar;



