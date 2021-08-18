import React from "react";

const Experience = () => {
  return (
    <div className="row p-5 bg-white rounded">
      <div className="col-12">
        <div className="form-group">
          <label className="mb-1 pb-3" for="institution">
            Name of Institution
          </label>
          <input
            type="text"
            className="form-control my-1"
            id="institution"
            placeholder=""
          />
        </div>
      </div>
      <div className="col-12">
        <div className="form-group">
          <label className="my-1 py-3 w-100" for="duties">
            Duties/Roles
          </label>
          <input
            type="text"
            className="form-control my-1"
            id="duties"
            placeholder=""
          />
        </div>
      </div>
      <div className="col-6">
        <div className="form-group">
          <label className="my-1 py-3 w-100" for="start">
            Start year
          </label>
          <input
            type="date"
            className="form-control my-1"
            id="start"
            placeholder=""
          />
        </div>
      </div>
      <div className="col-6">
        <div className="form-group">
          <label className="my-1 py-3 w-100" for="end">
            End year
          </label>
          <input type="date" className="form-control" id="end" placeholder="" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
