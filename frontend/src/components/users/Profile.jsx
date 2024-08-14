import React from "react";
import Loader from "../layouts/Loader";

const Profile = () => {
  return (
    <>
      {5 > 10 ? (
        <Loader />
      ) : (
        <>
          <div className="row justify-content-around mt-5 user-info">
            <div className="col-12 col-md-5 profile">
              <div className="d-flex align-items-center mb-4">
                <figure className="avatar avatar-profile text-center mr-3">
                  <img
                    className="rounded-circle figure-img img-fluid"
                    src=""
                    alt="WSA Developer"
                  />
                </figure>
                <span>Welcome WSA Developer!</span>
              </div>
              <a id="edit_profile" className="btn btn-primary btn-block my-5">
                Edit Profile
              </a>
              <h4>Full Name:</h4>
              <p>WSA Developer</p>

              <h4>Email Address</h4>
              <p>abc@email.com</p>

              <h4>Joined On</h4>
              <p>2024-07-06</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
