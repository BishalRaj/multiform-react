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
        <button className="btn btn-success">Add</button>
      </div>

      <div className="col-12 mt-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Expertise</th>
              <th scope="col">Percent</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TU</td>
              <td>MBA</td>
              <td>
                <button className="btn btn-danger">-</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Skill;
