import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function AxiosPut() {
    const [data, setData] = useState([])
    const dataToUpdate = {
        id:1,
        name : "kenil swadas",
    }
    const handleSubmit = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            
            setData(response.data);
        
           
           
        })
    }
    const Update = () =>{
        axios.put("https://jsonplaceholder.typicode.com/users/1",dataToUpdate).then((response)=>{
            console.log(response);
        }).catch ((error)=>{
            console.log("error");
        })
    }
  return (
    <div>
        <h1>Axios Put Method</h1>
        <button onClick={handleSubmit}>submit</button>
        <button onClick={Update}>update</button>
        <p>{data.map((e)=>{
            return (
                <li>{e.name},{e.id}</li>           )
        })}</p>
    </div>
  )
}

export default AxiosPut