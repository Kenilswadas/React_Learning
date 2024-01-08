import React from "react";
const cities = [
  { title: "London", IsCapital: true, id: 1 },
  { title: "italy", IsCapital: false, id: 2 },
  { title: "delhi", IsCapital: true, id: 3 },
];


function IsCapital(props) {
 
  const listItems = cities.map((value) => (
    <li
      key={value.id}
      style={{
        color: value.IsCapital ? "green" : "red",
      }}
    >
      {/* {value} */}
      [{value.title} , {value.id}]
    </li>
  ));
  return (
    <div>
      <ul>{listItems}</ul>
    
    </div>
  );
}

export default IsCapital;
