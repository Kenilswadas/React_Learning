// // // // import React from "react";


// // // // import img1 from "./images/coffee_01.jpeg";
// // // // import img2 from "./images/coffee_02.jpeg";


// // // //   const images = [
// // // //     { id: 1,catagory:"coffee_01", pic: img1 },
// // // //     { id: 2,catagory:"coffee_02" ,pic: img2 },
// // // //   ];


// // // // export default images;

// // // //App() code here 
// // // <div className="xy">
// // //         <button onClick={allItem}>ALL</button>
// // //         <button onClick={()=>coffee_01("coffee_01")}>coffee_01</button>
// // //         <button onClick={()=>coffee_02("coffee_02")}>coffee_02</button>
// // //         <button onClick={()=>RemoveallItem("")}>RemoveallItem</button>
// // //       </div>
// // //       <div>
// // //         {img.map((value) => {
// // //           return (
// // //             <div className="xyz">
// // //               <img src={value.pic} alt="allimages" />
// // //               <p>{images.map(()=>{
// // //                 return(
// // //                   <div>{[" id : "+value.id," catagory : "+value.catagory]}</div>
// // //                 );
// // //               })}</p>
// // //             </div>
// // //           );
// // //         })}
// // //       </div>













// // const [img, setImage] = useState(images);
// //   // console.log(img);

// //   //function for allimages
// //   const allItem = () => {
// //     const finalData = images.filter((value) => {
// //     return value;
// //     });
// //     setImage(finalData);
// //   };

// //   //function for coffee_01
// //   const coffee_01 = (catagoryItem) => {
// //     const finalData = images.filter((value) => {
// //     return  value.catagory===catagoryItem;
// //     });
// //     setImage(finalData);
// //   };
// // // function for coffee_01
// //   const coffee_02 = (catagoryItem) => {
// //     const finalData = images.filter((value) => {
// //     return  value.catagory===catagoryItem;
// //     });
// //     setImage(finalData);
// //   };

// // //function for allimages
// // const RemoveallItem = () => {
// //   const finalData = images.filter((value) => {
// //   return false;
// //   });
// //   setImage(finalData);
// // };



// import images from "./ImageFilter";
// import React, { useState } from "react";