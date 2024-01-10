import React from "react";
import data from "../data.json";

const ListRenderer = ({ htmlContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};
const { html_content } = data.course.key_topics;

const Topics = () => {
  return (
    <div>
      <div>
        <h2>Key topics to cover</h2>
        <ListRenderer htmlContent={html_content} />
      </div>
    </div>
  );
};

export default Topics;
