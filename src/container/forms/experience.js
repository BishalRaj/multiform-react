import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Experience = () => {
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
    <div className="row p-5 bg-white rounded">
      <div className="col-12">
        <button className="btn btn-primary" onClick={optionClickHandler}>
          Add new Experience
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
            <input
              type="date"
              className="form-control"
              id="end"
              placeholder=""
            />
          </div>
        </div>
      </>

      {moreOption.map((option) => {
        return (
          <>
            <div className="col-12 mb-5 mt-5">
              <button className="btn btn-primary" onClick={optionClickHandler}>
                Add new Experience
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
                <input
                  type="date"
                  className="form-control"
                  id="end"
                  placeholder=""
                />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Experience;
