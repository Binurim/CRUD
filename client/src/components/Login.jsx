import React from "react";
import "../App.css";

const Login = () => {
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

          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="rememberMeCheck"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="rememberMeCheck">
                  Remember me
                </label>
              </div>
            </div>

            <div className="col loginLinks">
              <a href="#">Forgot password?</a>
            </div>
          </div>

          <button type="button" className="btn btn-dark btn-block mb-4">
            Sign in
          </button>

          <div className="text-center loginLinks">
            <p>
              Not a member? <a href="/register">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
