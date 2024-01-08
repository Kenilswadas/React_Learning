// function IfCondition(){
//     const voters =[
//       {
//         id:1,
//         name:"joy",
//         age:"15"
//       },
//       {
//         id:2,
//         name:"amit",
//         age:"19"
//       },  
//     ]
//     // if condition
//     const isvote = voters.filter((values)=>{
//       if (values.age>=18) {
//         return true;
//       }
//       else{
//         return false;
//       }
      
//     })
//     return(
//         <div>
//           {/* print voters */}
//           <p>{voters.map((values)=>{
//             return (
//               <div>
//                 <li>{[values.id,values.name,values.age]}</li>
//               </div>
//             );
//           })}</p>
//           {/* IfCondition */}
//           <p>{isvote.map((value)=>{
//             return(
//               <div>
//                 {[value.id,value.name,value.age]}
//               </div>
//             )
//           })}</p>
    
//         </div>
//       );
//     }







// LoggicalAnd function
// function LoggicalAnd() {
//     //array
//     const arr = [13, 14, 15, 16, 17];
  
//     //LoggicalAnd condition
//     const newArr = arr.map((value) => {
//       console.log(value);
//       if (value % 2 === 0) {
//         return (
//           <div>
//             <li>{value}</li>
//           </div>
//         );
//       } else return false;
//     });
//     return (
//       <div>
//         <p>numbers:</p>
//         <p>
//           {arr.map((e) => {
//             return (
//               <div>
//                 <li>{e}</li>
//               </div>
//             );
//           })}
//         </p>
//         <p>even numbers:</p>
//         <p>{newArr}</p>
//       </div>
//     );
//   }
  
//   function TernanyFunction() {
//     const arr = [1, 2, 3, 4, 5];
//     const evenArr = arr.map((e) => {
//       return (
//         <div>
//           <p>{e % 2 === 0 ? <li>{e}</li> : false}</p>
//         </div>
//       );
//     });
//     const oddArr = arr.map((e) => {
//       return (
//         <div>
//           <p>{e % 2 !== 0 ? <li>{e}</li> : false}</p>
//         </div>
//       );
//     });
//     return (
//       <div>
//         <p>Array is :</p>
//         <p>
//           {arr.map((e) => {
//             return <li>{e}</li>;
//           })}
//         </p>
//         <p>New even Array is :</p>
//         <p>{evenArr}</p>
//         <p>New odd Array is :</p>
//         <p>{oddArr}</p>
//       </div>
//     );
//   }