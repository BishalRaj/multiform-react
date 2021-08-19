import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Skill = () => {
  const [moreOption, setmoreOption] = useState([]);
  const optionClickHandler = () => {
    setmoreOption([...moreOption, { id: uuidv4() }]);
  };
  const handleRemoveOption = (id) => {
    setmoreOption(moreOption.filter((option) => option.id !== id));
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
            <input
              type="text"
              className="form-control my-1"
              id="uid"
              name="uid"
              value={uuidv4()}
              placeholder=""
              hidden
            />
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
          </div>
        );
      })}
    </>
  );
};

export default Skill;
