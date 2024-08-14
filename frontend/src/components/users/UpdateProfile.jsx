import React from "react";

const UpdateProfile = () => {
  return (
    <>
      <div className="row wrapper">
        <div className="col-10 col-lg-5 updateprofile">
          <form className="shadow-lg" encType="multipart/form-data">
            <h1 className="mt-2 mb-5">Update Profile</h1>
            <div className="form-group">
              <label htmlFor="name_field">Name</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                name="name"
                value="WSA Developer"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                name="email"
                value="abc@email.com"
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="avatar_upload">Avatar</label>
              <div className="d-flex align-items-center">
                <div>
                  <figure className="avatar mr-3 item-rtl">
                    <img
                      src=""
                      className="rounded-circle"
                      alt="Avatar Preview"
                    />
                  </figure>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    name="avatar"
                    className="custom-file-input"
                    id="customFile"
                    accept="images/*"
                  ></input>
                  <label className="custom-file-label" htmlFor="customFile">
                    Choose Avatar
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-block py-3"
              // disabled={loading ? true : false}
            >
              UPDATE
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
