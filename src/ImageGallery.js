import React from "react";
import img1 from "./images/coffee_01.jpeg";
import img2 from "./images/coffee_02.jpeg";
import img3 from "./images/coffee_03.jpeg";

function ImageGallery() {
  const images = [
    {
      id: 1,
      pic: img1,
    },
    {
      id: 2,
      pic: img2,
    },
    {
      id: 3,
      pic: img3,
    },
  ];
  return (
    <div>
      {images.map((value) => {
        return (
          <img src={value.pic} alt="images" height="200px" width="200px" />
        );
      })}
    </div>
  );
}

export default ImageGallery;
