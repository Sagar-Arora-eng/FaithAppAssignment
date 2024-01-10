// TestimonialSlideshow.js

import React, { useState } from "react";
import "./TestimonialCaroudel.css";
import data from "../data.json";

const testimonials = [
  {
    id: 1,
    content: data.testimonial.text,
    author: data.testimonial.reviewer_name,
    designation: data.testimonial.reviewer_designation,
    image: "https://placekitten.com/100/100", // Replace with your image URL
  },
  {
    id: 2,
    content: data.testimonial.text,
    author: data.testimonial.reviewer_name,
    designation: data.testimonial.reviewer_designation,
    image: "https://placekitten.com/200/286",
  },
  // Add more testimonials as needed
];

const Carousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonial-slideshow">
      <div className="testimonial-container">
        <div className="testimonial-content">
          <p>{testimonials[currentIndex].content}</p>
          <span className="testimonial-author">
            {testimonials[currentIndex].author}
          </span>
          <hr />
          <span className="testimonial-author">
            {testimonials[currentIndex].designation}
          </span>
        </div>
        <div className="testimonial-image">
          <img
            src={testimonials[currentIndex].image}
            alt={`Author ${testimonials[currentIndex].author}`}
          />
        </div>
      </div>
      <div className="slideshow-controls">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default Carousal;
