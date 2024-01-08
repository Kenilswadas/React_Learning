// import { useState } from "react";
// import { SiFlipkart } from "react-icons/si";
// import { FaAmazon } from "react-icons/fa";
// import img1 from "./images/coffee_01.jpeg";
// import img2 from "./images/coffee_02.jpeg";

// const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [icon, setIcons] = useState(0);
//   const [img, setImg] = useState(img1);
//   const[color, setColor]=useState();
//   // setImage(<SiFlipkart/>)
//   function increase() {
//     setCount(count + 1);
//     setCount2(count + 1);
//   }
//   function decrease() {
//     setCount(count - 1);
//   }
//   function decreasetillZero() {
//     if (count2 === 0) {
//       setCount2(0);
//     } else {
//       setCount2(count2 - 1);
//     }
//   }

//   function changeIcon() {
//     setIcons(1);
//     if (icon === 1) {
//       setIcons(0);
//     }
//   }
//   function changeImage() {
//     setImg(img2);
//     if (img === img2) {
//       setImg(img1);
//     }
//   }
//   function changeColor(){
//     setColor("blue")
//     if(color==="blue"){
//       setColor("red")
//     }
//   }

//   <div>
//       <p>1. Changing value of a variable:</p>
//       <p>Your Count is : {count}</p>
//       <button onClick={increase}>increase state</button>
//       <button onClick={decrease}>decrease state</button>
//       <p>Update counter value (not lessthan 0):</p>
//       <p>Your Count is : {count2}</p>
//       <button onClick={decreasetillZero}>decreasetillZero</button>
//       <p>2. Changing the image on button click</p>
//       <p>Icon : </p>
//       {icon === 0 ? <SiFlipkart /> : <FaAmazon />}
//       <br />
//       <button onClick={changeIcon}>changeImage</button>
//       <p>Image : </p>
//       <br />
//       <img src={img} alt="image"></img>
//       <br />
//       <button onClick={changeImage}>changeImage</button>

//       {/* 3. Changing the style /changing the CSS of Tags */}
//       <p>3. Changing the style /changing the CSS of Tags</p>
//       <h1
//         style={{
//           color: color,
//         }}
//       >
//         Hello World !!
//       </h1>
//       <button onClick={changeColor}>click</button>
//     </div>
 