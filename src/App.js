import data from "./data.json";
import { useState } from "react";

import Header from "./components/Header";
import Course from "./components/Course";
import Expect from "./components/expect";
import AboutInstructor from "./components/AboutInstructor";
import Carousal from "./components/Carousal";
import Topics from "./components/Topics";

const extractTextFromHTML = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

function App() {
  const [activeSection, setActiveSection] = useState("about");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const containerStyle = {
    display: "flex",
  };

  const section1Style = {
    width: "60%",
    padding: "20px", // Optional: Add padding or other styles as needed
  };

  const section2Style = {
    width: "40%",
    padding: "20px", // Optional: Add padding or other styles as needed
  };

  const buttonStyle = {
    padding: "10px",
    marginRight: "20px",
    marginLeft: "60px",
    cursor: "pointer",
    border: "none",
    background: "none",
    textDecoration: "none",
    color: "black",
    fontSize: "22px",
    fontWeight: "bold",
    // Add similar borderBottom styles for other buttons
  };

  const aboutText = extractTextFromHTML(data.course.about.html_content);

  return (
    <div>
      <Header />
      <div style={containerStyle}>
        <section style={section1Style}>
          <nav>
            <button
              style={{
                ...buttonStyle,
                borderBottom:
                  activeSection === "about" ? "2px solid blue" : "none",
              }}
              onClick={() => handleSectionClick("about")}
            >
              About
            </button>
            <button
              style={{
                ...buttonStyle,
                borderBottom:
                  activeSection === "instructor" ? "2px solid blue" : "none",
              }}
              onClick={() => handleSectionClick("instructor")}
            >
              Instructor
            </button>
            <button
              style={{
                ...buttonStyle,
                borderBottom:
                  activeSection === "review" ? "2px solid blue" : "none",
              }}
              onClick={() => handleSectionClick("review")}
            >
              Review
            </button>
          </nav>
          <div>
            {activeSection === "about" && (
              <section>
                <h2>About the course</h2>
                <p>{aboutText}</p>
                <p>{aboutText}</p>
              </section>
            )}

            {activeSection === "instructor" && (
              <section>
                <h2>Instructor Section</h2>
                <p>This is the instructor section content.</p>
              </section>
            )}

            {activeSection === "review" && (
              <section>
                <h2>Review Section</h2>
                <p>This is the review section content.</p>
              </section>
            )}
          </div>
          <div>
            <Expect />
          </div>

          <div>
            <Topics />
          </div>
        </section>
        <section style={section2Style}>
          <Course />
        </section>
      </div>
      <div>
        <AboutInstructor />
      </div>
      <div>
        <Carousal />
      </div>
    </div>
  );
}

export default App;
