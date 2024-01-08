import React, { useEffect, useState } from "react";
import axios from "axios";

function Postmethod() {
  const [inputdata, setInputData] = useState({ firstname: " ", lastname: " " });

  const handleChange = (e) => {
    
    setInputData({ ...inputdata, [e.target.name]: e.target.value });
    console.log(inputdata);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    axios.post("https://reqres.in/api/users",inputdata).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((response) => {
        console.log(response.status, response);
      });
  },[])

  return (
    <div>
      <h1>axios post</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          name="firstname"
          value={inputdata.firstname}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="text"
          name="lastname"
          value={inputdata.lastname}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
      {/* {data.map((Data,index) => (
        <div key={index}>
           <h1>{Data}</h1>
          </div>
      ))} */}
    </div>
  );
}

export default Postmethod;
