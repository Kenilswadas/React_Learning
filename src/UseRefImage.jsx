/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useRef, useState } from "react";
import img1 from "../src/images/coffee_01.jpeg";
import img2 from "../src/images/coffee_02.jpeg";
import img3 from "../src/images/coffee_03.jpeg";
function UseRefImage() {
  //useState for count increment or re- render dom
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  //use Ref for image slider
  const ref = useRef(null);
  useEffect(() => {
    switch (count) {
      case 1:
        ref.current = img1;
        break;
      case 2:
        ref.current = img2;
        break;
      case 3:
        ref.current = img3;
        break;

      default:
        ref.current=""
        break;
    }
  });
  return (
    <div>
      <h1>UseRefImage</h1>
      <button onClick={handleCount}> change image</button>
      <br />
      <img src={ref.current} alt="image" />
    </div>
  );
}

export default UseRefImage;
