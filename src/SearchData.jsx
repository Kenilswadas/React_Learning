import React, { useRef } from "react";
import data from "./Data";

function SearchData() {
  const inputref = useRef("");
  console.log(inputref);

// handleChange function or converts input to lowercase 
  const handleChange = (event) => {
    const inputString =event.target.value;
    const lowercaseInput = inputString.toLowerCase();
    console.log(lowercaseInput);
  };

  return (
    <div>
      <h1>Search From Allready</h1>
      {data.filter((e,index)=>{
            return (
                <li key={index}>{e.name.toLowerCase()}</li>
            )
        })}
      <hr />
      <form action="">
        <input type="text" ref={inputref} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchData;
