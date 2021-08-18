import React from "react";

const Personal = ({ handleChange, data }) => {
  return (
    <>
      <div className="row p-5 bg-white">
        <div className="col-12">
          <div className="form-group my-2">
            <label className="" for="name">
              Name
            </label>
            <input
              type="text"
              className="form-control my-1"
              id="name"
              name="name"
              value={data.name && data.name}
              placeholder=""
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group my-2">
            <label className="" for="email">
              Email
            </label>
            <input
              type="text"
              className="form-control my-1"
              id="email"
              name="email"
              onChange={handleChange}
              value={data.email && data.email}
              placeholder=""
              required
            />
            <small>Hint: Enter your personal email address.</small>
          </div>
        </div>
        <div className="col-6">
          <div className="form-group my-2">
            <label className="" for="password">
              Password
            </label>
            <input
              type="password"
              className="form-control my-1"
              id="password"
              name="password"
              onChange={handleChange}
              value={data.password && data.password}
              placeholder=""
              required
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group my-2">
            <label className="" for="confirm-password">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control my-1"
              id="confirm-password"
              name="confirmPassword"
              onChange={handleChange}
              value={data.confirmPassword && data.confirmPassword}
              placeholder=""
              required
            />
          </div>
        </div>

        <div className="col-6">
          <div className="form-group my-2">
            <label className="" for="address">
              Address
            </label>
            <input
              type="text"
              className="form-control my-1"
              id="address"
              name="address"
              onChange={handleChange}
              value={data.address && data.address}
              placeholder=""
              required
            />
          </div>
        </div>

        <div className="col-6">
          <div className="form-group my-2">
            <label className="" for="phone">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control my-1"
              id="phone"
              name="phone"
              value={data.phone && data.phone}
              onChange={handleChange}
              placeholder=""
              required
            />
          </div>
        </div>

        <div className="col-6">
          <div className="form-group my-2">
            <label className="" for="role">
              Role
            </label>
            <input
              type="text"
              className="form-control my-1"
              id="role"
              name="role"
              value={data.role && data.role}
              onChange={handleChange}
              placeholder=""
              required
            />
          </div>
        </div>

        <div className="col-6">
          <div className="form-group my-2">
            <label className="" for="experience">
              Experience
            </label>
            <input
              type="text"
              className="form-control my-1"
              id="experience"
              name="experience"
              value={data.experience && data.experience}
              onChange={handleChange}
              placeholder=""
              required
            />
          </div>
        </div>

        <div className="col-12">
          <div className="form-group my-2">
            <label className="" for="avatar">
              Avatar
            </label>
            <input
              type="file"
              className="form-control my-1"
              id="avatar"
              placeholder=""
              required
            />
            <small>Hint: Upload your avatar picture</small>
          </div>
        </div>
        <div className="col-12">
          <div className="form-group my-2">
            <label className="" for="resume">
              Resume
            </label>
            <input
              type="file"
              className="form-control my-1"
              id="resume"
              placeholder=""
              required
            />
            <small>Hint: Upload your resume</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
