import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App';
// import reportWebVitals from "./reportWebVitals";

//first, build a simple form with meets requirements.
const teamList = [
  { name: "johnny", email: "johnny@jdm.com", role: "finisher" },
  { name: "russ", email: "russ@jdm.com", role: "boss man" },
  { name: "matt", email: "matt@jdm.com", role: "wheel barrow man" },
];

//intial values for the form itself
const intialValues = {
  name: "",
  email: "",
  role: "",
};

function SimpleForm() {
  const [team, setTeam] = useState(teamList);
  const [formValues, setFormValues] = useState(intialValues);

  const change = (evt) => {
    //change the value in a form
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submit = (evt) => {
    //subit the form inputs to state
    evt.preventDefault();
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    };
    setTeam([...team, newTeamMember]);
    setFormValues(intialValues);
  };

  return (
    <div className="container">
      <h1>Simple Form</h1>

      {team.map((teamMember, idx) => {
        return (
          <div key={idx}>
            {teamMember.name} is the {teamMember.role} and can be reached at{" "}
            {teamMember.email}
          </div>
        );
      })}
      <form onSubmit={submit}>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={change}
          placeholder="name"
        />
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={change}
          placeholder="email address"
        />
        <input
          type="text"
          name="role"
          value={formValues.role}
          onChange={change}
          placeholder="role"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

ReactDOM.render(
  <>
    {/* <SimpleForm /> */}
    <App />
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
