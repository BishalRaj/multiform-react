import React, { createContext, useState } from "react";

export const DetailsContext = createContext();

export const DetailsProvider = (props) => {
  const [personal, setPersonal] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    role: "",
    experience: "",
  });

  const [academic, setAcademic] = useState({});
  const [experience, setExperience] = useState({});
  const [skills, setSkills] = useState([]);
  const [social, setSocial] = useState({
    facebook: "",
    github: "",
    twitter: "",
    pinterest: "",
    linkedin: "",
    website: "",
  });

  return (
    <DetailsContext.Provider
      value={[
        personal,
        setPersonal,
        academic,
        setAcademic,
        experience,
        setExperience,
        skills,
        setSkills,
        social,
        setSocial,
      ]}
    >
      {props.children}
    </DetailsContext.Provider>
  );
};
