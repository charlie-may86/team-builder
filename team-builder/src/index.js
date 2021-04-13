import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";

//first, build a simple form with meets requirements.
const teamList = [
  { name: "johnny", email: "johnny@jdm.com", role: "finisher" },
  { name: "russ", email: "russ@jdm.com", role: "boss man" },
  { name: "matt", email: "matt@jdm.com", role: "wheel barrow man" },
];



function SimpeForm() {
  const [team, setTeam] = useState(teamList)

  return (
    <div className='container'>
      <h1>Simple Form</h1>

      {team.map((teamMember, idx) => {
      return (
        <div key={idx}>
          {teamMember.name} is the {teamMember.role} and can be reached at {teamMember.email}
        </div>
      )
    })}
    </div>

  );

  
}

ReactDOM.render(
  <React.StrictMode>
    <SimpeForm />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
