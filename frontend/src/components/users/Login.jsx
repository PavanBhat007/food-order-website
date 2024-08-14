import React from "react";
import Loader from "../layouts/Loader";

const Login = () => {
  return (
    <>
      {5 > 10 ? (
        <Loader />
      ) : (
        <>
          <div className="row wrapper">
            <div className="col-10 col-lg-5">
              <form className="shadow-lg">
                <h1 className="mb-3">Login</h1>
                <div className="form-group">
                  <label htmlFor="email_field">Email</label>
                  <input
                    type="email"
                    id="email_field"
                    className="form-control"
                    value={"abc.email.com"}
                  ></input>
                </div>
                <div className="form-group ">
                  <label htmlFor="password_field">
                    Password <span>( not less than 8 character)</span>
                  </label>
                  <input
                    type="password"
                    id="password_field"
                    className="form-control"
                    value={"12345678"}
                  ></input>
                </div>
                <a className="float-right mb-4">Forgot Password</a>
                <button
                  id="login_button"
                  type="submit"
                  className="btn btn-block py3"
                >
                  LOGIN
                </button>
                <a className="float-right mt-3">NEW USER?</a>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
