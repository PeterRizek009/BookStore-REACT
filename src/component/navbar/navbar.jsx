import React, { useState, useEffect } from "react";
import { NavLink, Link } from 'react-router-dom';
import NavTop from "./navtop";
import './navbar.css'
import Books from "../db";


const Navbar = () => {

  const [cartnum, setCartNum] = useState([])


  useEffect(() => {
    const cartBooks = Books.filter((element) => element.isInCart === true);
    setCartNum(cartBooks)
  }, [cartnum])


  return (<>
    <NavTop />
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand text-danger logo h1 align-self-center" to={"/"}>
          ALEX<span className="text-black">BookShop</span>
        </Link>

        <div className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars-staggered"></i>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">

        </div>

        <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="navbarNav">
          <div className="flex-fill">
            <ul className="nav navbar-nav d-lg-inline-flex  mx-lg-5">

              <li className="nav-item mx-lg-4">
                <Link className="nav-link" aria-current="page" to={"/"}>Home</Link>
              </li>

              <li className="nav-item mx-lg-4">
                <Link className="nav-link" to={"/allbooks"}>All Books</Link>
              </li>

              <li className="nav-item mx-lg-4">
                <Link className="nav-link" to={"/newReleased"}>Wishlist <i className="far fa-heart"></i></Link>
              </li>
              <li className="nav-item mx-lg-4">
                <Link className="nav-link" to={"/aboutus"}>About us</Link>
              </li>
            </ul>
          </div>

          <div className="nav-item   mt-2">
            <NavLink className="nav-icon position-relative text-decoration-none" to={'./shoppingcart'}>
              <i className="fa fa-fw fa-cart-arrow-down text-dark" />
              <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">{cartnum.length}</span>
            </NavLink>
            <NavLink className="nav-icon position-relative text-decoration-none mx-5" to={"./signin"}>
              <i className="fa fa-fw fa-user text-dark mr-3" />
            </NavLink>
          </div>
        </div>

      </div >
    </nav >
  </ >);
}





export default Navbar;
