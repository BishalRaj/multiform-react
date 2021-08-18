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
  const [details, setdetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
    role: "",
    experience: "",
  });

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
    } = details;

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
    setdetails({ ...details, [event.target.name]: event.target.value });
  };

  return (
    <>
      <section className="container">
        <Progressbar step={step} />
      </section>
      <section className="container">
        <div className="px-5 py-3 shadow rounded-3">
          {/*  */}

          {step === 1 && (
            <Personal
              handleChange={handleChange}
              data={{
                name: details.name,
                email: details.email,
                password: details.password,
                confirmPassword: details.confirmPassword,
                address: details.address,
                role: details.role,
                phone: details.phone,
                experience: details.experience,
              }}
            />
          )}
          {step === 2 && <Academic />}
          {step === 3 && <Experience />}
          {step === 4 && <Skill />}
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
