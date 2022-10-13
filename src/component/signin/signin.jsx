import React, { useState } from "react";
import "./signin.css"
import users from "../users.json"
import {useNavigate} from "react-router"


function SignIn () {

  const [data, setData] = useState({
    username: "",
    password: "",
    errors: {}
  });
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
    users.users.map((user) => {
      if(user.username === data.username && user.password === data.password){
        if(user.role === "1"){
          navigate("/admin", { replace: true });
        }
      }
    })
  
  }

  const handleChange = (e) => {
    //set new data after change 
    setData({
      ...data , [e.target.name]:e.target.value,
    });
     console.log(data);
    
   
  };

  return (
    <section className="signIn">
      <div className="sign-Box">
        <div className="myform">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username">Username</label>
              <input
                name="username"
                value={data.username}
                onChange={handleChange}
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
                value={data.password}
                onChange={handleChange}
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
export default SignIn;






