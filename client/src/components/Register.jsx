import React from "react";
import "../App.css";

const Register = () => {
  return (
    <div className="container-fluid">
      <div className="form-signin mt-5">
        <form className="col-5">
          <div className="form-outline mb-4">
            <label>Username</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-outline mb-4">
            <label>Password</label>
            <input type="password" className="form-control" />
          </div>
          <button type="button" className="btn btn-dark btn-block mb-4">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
