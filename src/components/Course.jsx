import React from "react";
import data from "../data.json";
import { MdOutlineComment } from "react-icons/md";

const Course = () => {
  const containerStyle = {
    width: "20%",
    margin: "auto",
    marginTop: "-40px",
    position: "absolute",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#DCD6D0",
  };

  const pointsStyle = {
    marginBottom: "10px",
  };

  const registerButtonStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={{ lineHeight: "6px" }}>
        <h3>Course Fee</h3>
        <h1>&#8377;{data.course.fee.amount}</h1>
      </div>
      <div style={pointsStyle}>
        <h3>What includes : </h3>
        <p>
          <MdOutlineComment />
          &nbsp; On demand videos {data.course.inclusions.on_demand_videos}
        </p>
        {data.course.inclusions.live_qa_sessions && (
          <p>
            <MdOutlineComment />
            &nbsp; Live stream sessions
          </p>
        )}
        {data.course.inclusions.whatsapp_community && (
          <p>
            <MdOutlineComment />
            &nbsp; Active whatsApp community
          </p>
        )}
        {/* Add more points as needed */}
      </div>

      <button style={registerButtonStyle}>
        <b>Register Today</b>
      </button>
    </div>
  );
};

export default Course;
