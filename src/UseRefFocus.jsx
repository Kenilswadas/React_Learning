import React, { useRef } from 'react'

function UseRefFocus() {
  const inputref = useRef(null);
  const handleFocus =()=>{
    console.log(inputref.current)
    inputref.current.focus();
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <div>
      <h1>use ref foucus</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">name : </label>
        <input type="text" placeholder='Enter your name' ref={inputref}/>
        <button onClick={handleFocus}>Focus on input</button>
      </form>
    </div>
  )
}

export default UseRefFocus