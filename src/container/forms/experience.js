import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Experience = ({ fetchData }) => {
  const [moreOption, setmoreOption] = useState([]);
  const [experienceData, setexperienceData] = useState([]);

  const optionClickHandler = () => {
    setmoreOption([...moreOption, { id: uuidv4() }]);
    setexperienceData({
      ...experienceData,
      [moreOption.length + 1]: {
        institution: "",
        duties: "",
        start: "",
        end: "",
      },
    });
  };
  const handleRemoveOption = (id) => {
    setmoreOption(moreOption.filter((option) => option.id !== id));
  };

  const handleChange = (event) => {
    setexperienceData({
      ...experienceData,
      [moreOption.length]: {
        ...experienceData[moreOption.length],
        [event.target.name]: event.target.value,
      },
    });
    let data = [
      {
        ...experienceData,
        [moreOption.length]: {
          ...experienceData[moreOption.length],
          [event.target.name]: event.target.value,
        },
      },
    ];
    fetchData(data);
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
              name="institution"
              placeholder=""
              onChange={handleChange}
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
              name="duties"
              placeholder=""
              onChange={handleChange}
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
              name="start"
              placeholder=""
              onChange={handleChange}
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
              name="end"
              placeholder=""
              onChange={handleChange}
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
                  name="institution"
                  placeholder=""
                  onChange={handleChange}
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
                  name="duties"
                  placeholder=""
                  onChange={handleChange}
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
                  name="start"
                  placeholder=""
                  onChange={handleChange}
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
                  name="end"
                  placeholder=""
                  onChange={handleChange}
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
