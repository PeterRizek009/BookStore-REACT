import React, { Component } from "react";
import "../css/aboutus.css";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="b-example-divider" />
        <div className="text-secondary px-4 py-5 aboutus-bg">
          <div className="py-4">
            <div className="titleabout fw-bold text-center">
              <h2>
                About <b>Alex Library</b>
              </h2>
            </div>
            <div className="col-lg-6 mx-auto">
              <p className="fs-5 mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic in
                aut, aliquam quisquam quaerat ducimus. Voluptatem amet quas illo
                debitis unde laborum ex sequi incidunt.
              </p>
            </div>
           
          </div>
        </div>
        <div className="b-example-divider" />
      </div>
    );
  }
}

export default AboutUs;
