import React from 'react'
import "./App.css";

export default function CssType(){
    const InternalCss ={
        backgroundColor:"red",
        margin:"2%",
        
    }
    return(
        
        <div className='main'>
            {/* div 01 */}
            <div style={{backgroundColor:"gray",margin:"2%"}}>
            <h1 >*Inline Css</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non adipisci fuga corporis officia delectus, laudantium consectetur tempore laborum, officiis nemo, tenetur expedita blanditiis vitae recusandae! Labore voluptatem molestias facere molestiae.</p>
            </div>
           
            {/* div 02 */}
            <div style={InternalCss}>
            <h1>*Internal Css ("using object")</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur non molestiae quod atque tempora molestias magni quo odit? Illum distinctio, quae ipsum rerum minus libero laborum excepturi magni. Eligendi.</p>
            </div>

            {/* div 03 */}
            <div className='External'>
            <h1>*External Css</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi iusto illum laborum, voluptatibus doloribus quam. Ipsam sapiente obcaecati atque qui officia quo. Corporis quaerat possimus ducimus cumque ipsam! Quam, at!</p>
            </div>
        </div>
    );
}
