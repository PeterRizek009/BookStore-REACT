import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import MenuItems from "./MenuItems"
import { NavLink, Link } from 'react-router-dom';



class Navbar extends Component {
  state = {
    clicked: false,
    loginBoxCheck: false
  };

 

  handleClick = () => {
    this.setState({ clicked: !(this.state.clicked) });

  }


  showLoginBox = () => {
    this.setState({ loginBoxCheck: !(this.state.loginBoxCheck) });
  }

  render() {
     
    return (
      <Fragment>
        <nav className="sticky" id="navbar">
          <div className="menu-btn" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>

          <ul className={this.state.clicked ? 'linksMenu' : 'closedLinks'}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink className={item.cName} to={item.url}>
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className="logo"></div>
          <div className="icons">
            <NavLink to='./shoppingcart'>
              <i><FontAwesomeIcon icon={faCartShopping} />
              <span>{}</span></i>
            </NavLink>
            <i>
              <FontAwesomeIcon icon={faCircleUser} onClick={this.showLoginBox} />
              <div className={this.state.loginBoxCheck ? 'login-container' : 'login-notShown'} id="LoginBox">
                <NavLink to="./signin">
                  <button type="button" className="btn btn-outline-info">
                    Sign in
                  </button></NavLink>
                <NavLink to='./signin'>
                  <button type="button" className="btn btn-outline-info">
                    Sign up
                  </button>
                </NavLink>
              </div>
            </i>
          </div>
        </nav>

      </Fragment>
    );
  }
}

export default Navbar;
