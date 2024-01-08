// import React, { useState } from "react";

// function NewTodoList() {
//   const [Title, setTitle] = useState("");
//   const [NewTitle, setNewTitle] = useState("");
//   const [Description, setDescription] = useState("");
//   const [NewDescription, setNewDescription] = useState("");
//   const [TodoList, setTodoList] = useState([]);

//   const data = {
//     title: Title,
//     detail: Description,
//   };

//   function handleChange(e) {
//     // console.log(e.target.value);
//     setTitle(e.target.value);
//   }
//   function handleChange2(e) {
//     // console.log(e.target.value);
//     setDescription(e.target.value);
//   }
//   function Add() {
//     setNewTitle(Title);
//     setNewDescription(Description);
//     setTodoList([...TodoList, data]);
//   }
// //chatgpt
// function del(index) {
//   setTodoList((prevTodoList) =>
//     prevTodoList.filter((value, id) => id !== index)
//   );
// }
// //error
// //  function del(index){
// //   setTodoList((e, id) => e.id !== index);
// //  } 

// //onclick for delete
// // onClick={setTodoList(()=>
//      TodoList.filter((value,id)=>value.id !== index))
// }


// //run successfully 
// function del(index){
//   setTodoList(TodoList=>TodoList.filter((a,b)=> b!== index));
// }

//   return (
//     <div>
//       <div className="inputDiv">
//         <label htmlFor="">Title :</label>
//         <input type="text" onChange={handleChange} />{" "}
//         <label htmlFor="">Description :</label>
//         <input type="text" onChange={handleChange2} />
//         <button type="button" onClick={Add}>
//           Add Task
//         </button>
//       </div>

//       <div className="outputDiv">
//         <h2>{NewTitle}</h2>
//         <p>{NewDescription}</p>
//         <div>
//           {TodoList.map((e, index) => {
//             return (
//               <div>
//                 <li key={index}>
//                   [{e.title},{e.detail}]<button onClick={() => del(index)} >del</button>
//                 </li>
//                 {}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NewTodoList;
