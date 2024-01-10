import React from "react";
import data from "../data.json";

const ListRenderer = ({ htmlContent }) => {
  const ulStyle = {
    listStyleType: "tick", // This sets the list item marker to a tick
    paddingLeft: "20px", // Optional: Adjust padding as needed
  };
  return (
    <div style={ulStyle} dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

const { html_content } = data.course.what_to_expect;

const Expect = () => {
  return (
    <div>
      <h2>What to expect from the course</h2>
      <ListRenderer htmlContent={html_content} />
    </div>
  );
};

export default Expect;
