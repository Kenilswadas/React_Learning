import React from "react";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About</h1>
      <button onClick={() => navigate("/contact")}>Go Contact</button>
      <button onClick={() => navigate(-1)}>Go Home</button>
    </div>
  );
}

export default About;
