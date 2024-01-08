// import React, { useState } from "react";
// import "../src/TodoList.css"

// function NewTodoList() {
//   const [Title, setTitle] = useState("");
//   const [NewTitle, setNewTitle] = useState("");
//   const [Description, setDescription] = useState("");
//   const [NewDescription, setNewDescription] = useState("");
//   const [TodoList, setTodoList] = useState([]);
//   const [editingIndex, setEditingIndex] = useState(null);

//   const data = {
//     title: Title,
//     detail: Description,
//   };

//   function handleChange(e) {
//     setTitle(e.target.value);
//   }

//   function handleChange2(e) {
//     setDescription(e.target.value);
//   }

//   function handleEditChange(e) {
//     setNewTitle(e.target.value);
//   }

//   function handleEditChange2(e) {
//     setNewDescription(e.target.value);
//   }

//   function Add() {
//     if (editingIndex !== null) {
//       // If in editing mode, update the existing item
//       setTodoList((prevTodoList) =>
//         prevTodoList.map((item, index) =>
//           index === editingIndex ? { ...data } : item
//         )
//       );
//       setEditingIndex(null);
//     } else {
//       // If not in editing mode, add a new item
//       setTodoList((prevTodoList) => [...prevTodoList, data]);
//     }

//     setTitle("");
//     setDescription("");
//   }

//   // function del(index) {
//   //   setTodoList(
//   //     TodoList.filter((value, id) => id !== index)
//   //   );
//   // }
//    function del(index){
 
    
//      setTodoList(TodoList.filter((e, id) => id !== index));
//  }

//   function edit(index) {
//     const itemToEdit = TodoList[index];
//     setTitle(itemToEdit.title);
//     setDescription(itemToEdit.detail);
//     setEditingIndex(index);
//   }

//   return (
//     <div>
//       <div className="inputDiv">
//         <label htmlFor="">Title :</label>
//         <input type="text" value={Title} onChange={handleChange} />
//         <label htmlFor="">Description :</label>
//         <input type="text" value={Description} onChange={handleChange2} />
//         <button type="button" onClick={Add}>
//           {editingIndex !== null ? "Update Task" : "Add Task"}
//         </button>
//       </div>

//       <div className="outputDiv">
//         <h2>{NewTitle}</h2>
//         <p>{NewDescription}</p>
//         <div>
//           {TodoList.map((e, index) => (
//             <div key={index}>
//               <li>
//                 [{e.title}, {e.detail}]{" "}
//                 <button onClick={() => del(index)}>del</button>{" "}
//                 <button onClick={() => edit(index)}>edit</button>
//               </li>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NewTodoList;
