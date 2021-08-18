import React, { useState } from "react";

const Academic = () => {
  const [show, setshow] = useState(false);
  const toggleShow = () => setshow(!show);

  return (
    <div className="row p-5 bg-white">
      {!show && (
        <div className="col-12">
          <button className="btn btn-primary" onClick={toggleShow}>
            Add new Qualification
          </button>
        </div>
      )}

      {show && (
        <>
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
              <label className="my-1 py-3 w-100" for="qualification">
                Name of Qualification
              </label>
              <input
                type="text"
                className="form-control my-1"
                id="qualification"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-4">
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
          <div className="col-4">
            <div className="form-group">
              <label className="my-1 py-3 w-100" for="end">
                End year
              </label>
              <input
                type="date"
                className="form-control"
                id="end"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label className="my-1 py-3 w-100" for="start">
                GPA/Percentage
              </label>
              <input
                type="number"
                className="form-control my-1"
                id="gpa"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-success float-end" onClick={toggleShow}>
              Add
            </button>
          </div>
        </>
      )}

      <div className="col-12 mt-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Institution</th>
              <th scope="col">Qualification</th>
              <th scope="col">Started at</th>
              <th scope="col">Ended at</th>
              <th scope="col">GPA/Percentage</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TU</td>
              <td>MBA</td>
              <td>2020</td>
              <td>2020</td>
              <td>202</td>
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

export default Academic;
