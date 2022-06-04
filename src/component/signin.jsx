import React, { Component } from "react";
import { Navigate  } from "react-router-dom";
import "../css/signin.css";


class SignIn extends Component {
   state = {
    username: "",
    password: "",
    errors: {}
  };

  handleSubmit = (e) => {
     e.preventDefault();

  };


  handleChange = (e) => {
    //Clone
    let state = { ...this.state };
    //Edit
    state[e.currentTarget.name] = e.currentTarget.value;
    //Set state
    this.setState(state);
  };


  render() {
    return (
      <section className="signIn">
        <div className="sign-Box">
            <div className="myform">
              <form onSubmit={this.handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username">Username</label>
                <input
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  type="text"
                  className="form-control"
                  id="username"
                />
                </div>
                <div className="mb-4">
                  <label htmlFor="Password" className="form-label">
                    Password
                  </label>
                  <input
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    className="form-control"
                    id="Password"
                  />
                </div>
              
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
               
              </form>
            </div>
          </div>
      
      </section>
    );
  }
}

export default SignIn;
