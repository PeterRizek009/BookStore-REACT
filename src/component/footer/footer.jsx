import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-white shadow ">
        <div className="container-fluid pt-2" >
          <div className="row footer-area">
            <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
              <h6>About Us</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
              <h6>Newsletter</h6>
              <p>Stay update with our latest</p>
              <div className="d-inline-flex align-items-center">
                <input className="form-control" name="EMAIL" placeholder="Enter Email " onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '" required="" type="email">
                </input>
                <button className="click-btn btn btn-default bg-warning">
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </button>
             
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
              <h6>Follow Me on</h6>
              <a className="btn btn-link btn-floating btn-lg text-white" href="https://www.linkedin.com/in/peter-rezik-a84408123/" role="button" data-mdb-ripple-color="dark"><i className="fab fa-linkedin" /></a>
              <a className="btn btn-link btn-floating btn-lg text-white " href="https://github.com/PeterRizek009" role="button" data-mdb-ripple-color="dark"><i className="fab fa-github" /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-white bg-dark p-4">
          © 2022 Copyright:
          <a className="text-white" href="https://github.com/PeterRizek009">Peter Rezik</a>
        </div>
      </footer>
    </div>
  );
}



export default Footer;
