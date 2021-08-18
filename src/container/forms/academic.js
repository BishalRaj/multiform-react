import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Academic = () => {
  const [moreOption, setmoreOption] = useState([]);
  const [show, setshow] = useState(false);
  const toggleShow = () => setshow(!show);
  const optionClickHandler = () => {
    setmoreOption([...moreOption, { id: uuidv4() }]);
  };
  const handleRemoveOption = (id) => {
    setmoreOption(moreOption.filter((option) => option.id !== id));
  };
  return (
    <>
      <div className="row p-5 bg-white">
        <div className="col-12 mb-5">
          <button className="btn btn-primary" onClick={optionClickHandler}>
            Add new Qualification
          </button>
        </div>
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
        </>
      </div>
      <div className="row p-5 bg-white">
        {moreOption.map((option) => {
          return (
            <>
              <div className="col-12 mb-5 mt-5">
                <button
                  className="btn btn-primary"
                  onClick={optionClickHandler}
                >
                  Add new Qualification
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleRemoveOption(option.id)}
                >
                  Remove Field
                </button>
              </div>
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
            </>
          );
        })}
      </div>
    </>
  );
};
export default Academic;
