import React from 'react'


function Array() {
    // const Arr=[1,2,3,4,5];
    
    const fruit =["apple","banana","pineapple","mango"];   
  return (
    <div>
  
        <h1>Using Array Map Function</h1>
        {fruit.map((value)=>{
            return <p>{"values are : " + value}</p>
        })}
    </div>
  );
}

export default Array