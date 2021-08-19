import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Skill = ({ fetchData }) => {
  const [moreOption, setmoreOption] = useState([]);
  const [skillData, setskillData] = useState([]);
  const optionClickHandler = () => {
    setmoreOption([...moreOption, { id: uuidv4() }]);
  };
  const handleRemoveOption = (id) => {
    setmoreOption(moreOption.filter((option) => option.id !== id));
  };

  const handleChange = (event) => {
    setskillData({
      ...skillData,
      [moreOption.length]: {
        ...skillData[moreOption.length],
        [event.target.name]: event.target.value,
      },
    });
    let data = [
      {
        ...skillData,
        [moreOption.length]: {
          ...skillData[moreOption.length],
          [event.target.name]: event.target.value,
        },
      },
    ];
    fetchData(data);
  };

  return (
    <>
      <div className="row p-5 bg-white rounded">
        <div className="col-12">
          <button className="btn btn-primary" onClick={optionClickHandler}>
            Add new expertise
          </button>
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
              name="expertise"
              onChange={handleChange}
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
              name="Percent"
              onChange={handleChange}
              placeholder=""
            />
          </div>
        </div>
      </div>

      {moreOption.map((option) => {
        return (
          <div className="row p-5 bg-white rounded">
            <div className="col-12">
              <button className="btn btn-primary" onClick={optionClickHandler}>
                Add new expertise
              </button>
              <button
                className="btn btn-primary"
                onClick={() => handleRemoveOption(option.id)}
              >
                Remove Field
              </button>
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
                  name="expertise"
                  onChange={handleChange}
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
                  name="Percent"
                  onChange={handleChange}
                  placeholder=""
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Skill;
