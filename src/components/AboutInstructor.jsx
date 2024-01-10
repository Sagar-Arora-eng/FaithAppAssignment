import React from "react";
import data from "../data.json";

import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const extractTextFromHTML = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

const AboutInstructor = () => {
  const aboutText = extractTextFromHTML(data.about_instructor.html_content);
  const containerStyle = {
    display: "flex",
    // maxWidth: "600px", // Set the desired maximum width
    margin: "auto",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
  };

  const imageContainerStyle = {
    flex: "1",
    width: "30px",
    height: "200px",
    overflow: "hidden",
    borderRadius: "50%",
    margin: "40px", // Rounded borders on the left side
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Ensure the image covers the container
  };

  const detailsContainerStyle = {
    flex: "2",
    padding: "20px",
  };
  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlo-OalEUGFEStn7z3bw6oEJ5PBNRrbLP02g&usqp=CAU"
          alt="Your Image"
          style={imageStyle}
        />
      </div>

      {/* Two sections for details */}
      <div style={detailsContainerStyle}>
        <h2>Details Section 1</h2>
        <p>{aboutText}</p>
        <div>
          <span style={{ marginRight: "30px" }}>
            <FaFacebook style={{ marginRight: "5px" }} />
            Facebook
          </span>
          <span style={{ marginLeft: "30px" }}>
            <FaTwitter style={{ marginRight: "5px" }} />
            Twitter
          </span>
        </div>
      </div>

      <div style={detailsContainerStyle}>
        <h2>Details Section 2</h2>
        <p>{aboutText}</p>
        <div>
          <span style={{ marginRight: "30px" }}>
            <FaYoutube style={{ marginRight: "5px" }} />
            YouTube
          </span>
          <span style={{ marginLeft: "30px" }}>
            <FaInstagramSquare style={{ marginRight: "5px" }} />
            Instagram
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutInstructor;
