import React, { useState } from "react";
import "./BasicForm.css";

function BasicForm() {
  const [fullName, setFullName] = useState("Faizan Bairagi");
  const [email, setEmail] = useState("faiza@gmail.com");
  const [password, setPassword] = useState(1234);
  let [skills, setSkills] = useState([]);

  function printValue(event) {
    event.preventDefault();
    
    const data = {
        fullName, email, password , skills
    }
    console.log(data)
  }

  function handleBox(event){
    
    const {value, checked} = event.target;
    console.log(value, checked)

    if(checked) {
        skills = skills;
        skills.push(value);
        setSkills(skills);
    }
    else{
        skills = skills.filter((item)=> item !== value)
        setSkills(skills)
    }

  }
  console.log("default skills is ", skills)
  return (
    <>
      <div>
        <form onSubmit={(event)=>{
            printValue(event);
        }}>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={fullName}
            required
            onChange={(event)=>{
                setFullName(event.target.value)
            }}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(event)=>{
                setEmail(event.target.value)
            }}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            required
            onChange={(event)=>{
                setPassword(event.target.value)
            }}
          />

          <label>Skills:</label>
          <input type="checkbox"
           id="java"
            name="skills[]"
            value="Java"
            onChange={(event)=>{
                handleBox(event)
            }} />
          <label htmlFor="java">Java</label>

          <input type="checkbox"
           id="js"
            name="skills[]"
             value="JavaScript"
              onChange={(event)=>{
                handleBox(event)
            }}  />
          <label htmlFor="js">JavaScript</label>

          <input type="checkbox"
           id="react"
           name="skills[]"
           value="React"
            onChange={(event)=>{
                handleBox(event)
            }} 
              />
          <label htmlFor="react">React</label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default BasicForm;
