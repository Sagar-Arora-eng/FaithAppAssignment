import React from "react";
import data from "../data.json";

const Header = () => {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "300px", // Set the desired height
    backgroundImage:
      'url("https://cdn.wionews.com/sites/default/files/inline-images/Nityanand%20Charan%20Das.jpg")', // Replace with your image URL
    backgroundSize: "cover",
    objectFit: "contain",
    // overflow: "hidden",
    backgroundPosition: "center",
    color: "#fff", // Set the text color
    textAlign: "left",
    display: "flex",
    alignItems: "left",
    // justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      <div style={{ margin: "10% 0 0 5%" }}>
        <h1>{data.instructor.name}</h1>
        <p>{data.course.title}</p>
      </div>
    </div>
  );
};

export default Header;
