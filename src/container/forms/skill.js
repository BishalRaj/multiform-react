import React from "react";

const Skill = () => {
  return (
    <div className="row p-5 bg-white rounded">
      <div className="col-12">
        <button className="btn btn-primary">Add new expertise</button>
      </div>

      <div className="col-4">
        <div className="form-group">
          <label className="my-1 py-3 w-100" for="expertise">
            Expertise
          </label>
          <input
            type="text"
            className="form-control my-1"
            id="expertise"
            placeholder=""
          />
        </div>
      </div>
      <div className="col-4">
        <div className="form-group">
          <label className="my-1 py-3 w-100" for="Percent">
            Percent
          </label>
          <input
            type="text"
            className="form-control"
            id="Percent"
            placeholder=""
          />
        </div>
      </div>
      <div className="col-4 d-flex justify-content-center align-items-center">
        <button className="btn btn-outline-dark">Remove</button>
      </div>
    </div>
  );
};

export default Skill;
