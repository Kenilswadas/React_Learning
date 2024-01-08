import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'


function Axios() {
  const [user, setUser] = useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
      console.log(response.data);
      setUser(response.data)
    }).catch((error)=>alert("problem error"))
  },[])
  return (
    <div>
        <h1>Axios</h1>
        
        <button  style={{ backgroundColor: "paleturquoise", color: "black" }}>run Axios</button>
        <p>{user.map((e)=>{
          return (
            <li>{user.name}</li>
          )
        })}</p>
        <p></p>
    </div>
  )
}

export default Axios