import React, { useState } from "react";

const Academic = () => {
  // const [show, setshow] = useState(false);

  // const toggleShow = () => setshow(!show);
  return (
    <div className="row p-5 bg-white">
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
          <input type="date" className="form-control" id="end" placeholder="" />
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
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Academic;
