import React from "react";
import "../css/progressbar.css";

const Progressbar = () => {
  return (
    <div className="form-steps form-steps--four">
      <div className="form-step form-step--one form-step__complete">
        <span className="form-step--label form-step--label__complete">
          Campaign Info
        </span>
      </div>

      <div className="form-steps--bar form-steps--bar__complete"></div>

      <div className="form-step form-step--two form-step__active">
        <span className="form-step--label">Donation Info</span>
      </div>

      <div className="form-steps--bar"></div>

      <div className="form-step form-step--three form-step__inactive">
        <span className="form-step--label form-step--label__inactive">
          Notification Info
        </span>
      </div>

      <div className="form-steps--bar"></div>

      <div className="form-step form-step--four form-step__inactive">
        <span className="form-step--label form-step--label__inactive">
          Nonprofit Info
        </span>
      </div>
    </div>
  );
};

export default Progressbar;
