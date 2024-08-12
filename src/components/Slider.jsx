import React from "react";
import { useEffect, useState } from "react";
import "../slider.css";

function Slider() {
  const feedbacks = [
    {
      personName: "Emily Johnson",
      jobTitle: "Chief Marketing Officer, BrightFuture",
      profilePic: "/card1.jpg",
      displayImage: "/rotate1.png",
      feedback:
        "Working with Brandmark was a breeze. The platform is user-friendly, and the end product exceeded our expectations.",
    },
    {
      personName: "Daniel O'Neil",
      jobTitle: "Founder, HealthSpark",
      profilePic: "/card2.jpg",
      displayImage: "/rotate2.png",
      feedback:
        "The logo creation process was seamless and fun. Brandmark gave us a professional logo that perfectly represents our brand.",
    },
    {
      personName: "Sophia Martinez",
      jobTitle: "Art Director, CreativeHub",
      profilePic: "/card3.jpg",
      displayImage: "/rotate3.png",
      feedback:
        "I was amazed at how easy it was to design a logo with Brandmark. The tools are intuitive, and the results are stunning.",
    },
  ];
  const [index, setIndex] = useState(0);

  function handleIndex(i) {
    setIndex(i);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % feedbacks.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="slider">
      <div className="slider-container">
        {feedbacks.map((feedback, i) => (
          <div key={i} className={`slider-text ${index === i ? "active" : ""}`}>
            <p>
              {/* SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(255,255,255,1)"
              >
                <path d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"></path>
              </svg>
              {feedback.feedback}
              {/* SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(255,255,255,1)"
              >
                <path d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"></path>
              </svg>
            </p>

            <div className="slider-profile">
              <img src={feedback.profilePic} alt="" />
              <div className="slider-profile-info">
                <p>{feedback.personName}</p>
                <p>{feedback.jobTitle}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="slider-product">
          {feedbacks.map((feedback, i) => (
            <img
              key={i}
              src={feedback.displayImage}
              className={index == i ? "active" : ""}
            />
          ))}
        </div>
      </div>
      <div className="dots">
        <button
          className={`dot ${index === 0 ? "dot-active" : ""}`}
          onClick={() => handleIndex(0)}
        ></button>
        <button
          className={`dot ${index === 1 ? "dot-active" : ""}`}
          onClick={() => handleIndex(1)}
        ></button>
        <button
          className={`dot ${index === 2 ? "dot-active" : ""}`}
          onClick={() => handleIndex(2)}
        ></button>
      </div>
    </section>
  );
}

export default Slider;
