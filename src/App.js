import { useState } from "react";
// import "./App.css";
// import Progressbar from "./container/progressbar";
import Personal from "./container/forms/personal";
import Academic from "./container/forms/academic";
import Experience from "./container/forms/experience";
import Skill from "./container/forms/skill";
import Social from "./container/forms/social";
import Progressbar from "./container/progressbar";

function App() {
  const [step, setstep] = useState(1);
  const [personal, setpersonal] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
    role: "",
    experience: "",
  });
  const [academic, setacademic] = useState([]);
  const [experience, setexperience] = useState([]);
  const [skills, setskills] = useState([]);

  const decreaseStep = () => {
    if (step > 1 && step <= 6) {
      setstep(step - 1);
    } else return;
  };

  const validate = () => {
    let isValid = true;
    let {
      name,
      email,
      password,
      confirmPassword,
      address,
      phone,
      role,
      experience,
    } = personal;

    switch (step) {
      case 1:
        if (
          name &&
          email &&
          password &&
          confirmPassword &&
          address &&
          phone &&
          role &&
          experience
        ) {
          isValid = true;
        }
        break;
      case 2:
        if (academic && academic != null && academic != undefined) {
          isValid = true;
        }

        break;
      case 31:
        break;
      case 4:
        break;
      case 5:
        break;
    }

    if (step > 0 && step < 5 && isValid) {
      setstep(step + 1);
    } else return;
  };

  const handleChange = (event) => {
    switch (step) {
      case 1:
        setpersonal({ ...personal, [event.target.name]: event.target.value });
        break;
      case 5:
        break;
      default:
        return;
    }
  };

  const fetchData = (data) => {
    switch (step) {
      case 2:
        setacademic(data[0]);
        break;
      case 3:
        setexperience(data[0]);
        break;
      case 4:
        setskills(data[0]);
        break;
    }
  };
  console.log("====================================");
  console.log(academic);
  console.log("====================================");
  return (
    <>
      <section className="container">
        <Progressbar step={step} />
      </section>
      <section className="container mb-5">
        <div className="px-5 py-3 shadow-lg rounded-3">
          {/*  */}

          {step === 1 && (
            <Personal handleChange={handleChange} data={personal} />
          )}
          {step === 2 && <Academic fetchData={fetchData} />}
          {step === 3 && <Experience fetchData={fetchData} />}
          {step === 4 && <Skill fetchData={fetchData} />}
          {step === 5 && <Social />}

          {/*  */}
          <div className="row border-top px-5 py-3 mt-3">
            <div className="col-6">Step {step} of 5</div>
            <div className="col-6">
              <button
                className="btn btn-primary float-end mx-2"
                onClick={validate}
              >
                Next
              </button>
              <button
                className="btn btn-outline-dark float-end mx-2"
                onClick={decreaseStep}
              >
                Previous
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
