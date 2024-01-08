import React, { useEffect, useState } from "react";
import { useRef } from "react";
function UseRef() {
  //refrence of input element
  // let inputref = useRef(null);
  // console.log( inputref);
  // const handleSubmit = (e)=>{
  //     e.preventDefault();
  //     const name = inputref.current.value;
  //     console.log(name);
  //     inputref.current.value="";
  // }

  //counter in useRef
  const count = useRef(0);
  const [c, setC] = useState(0);
  const incre = () => {
    return setC(c + 1);
  };
 useEffect((e)=>{
     count.current +=1;
 })
//   console.log(count.current);
//   console.log(c);
  return (
    <div>
      <h1>Use Ref </h1>
      {/* input element refrence */}
      {/* <label htmlFor="">name</label>
        <input type="text" ref={inputref}  />
        <button type='submit' onClick={handleSubmit}>submit</button> */}

      {/* counter in using useRef */}
      <button>clic me ! i am counter</button>
      <button onClick={incre}>click</button>

      <p>{count.current}</p>
    </div>
  );
}

export default UseRef;
