import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Contact(){
    const navigate = useNavigate();
    return (
        <div>
            <h1>contacts</h1>
            <button onClick={()=>navigate(-1)}>Go back</button>
        </div>
    );
}