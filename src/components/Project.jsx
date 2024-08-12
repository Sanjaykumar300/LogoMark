import React from "react";

import "../project.css";

function Project() {
  return (
    <section id="project">
      <div className="project-container">
        <div className="project-image">
          <img src="/Image 1.jpg" alt="Project Image" />
          <div className="project-overlay">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-off"
            >
              <path d="m2 2 20 20" />
              <path d="M8.35 2.69A10 10 0 0 1 21.3 15.65" />
              <path d="M19.08 19.08A10 10 0 1 1 4.92 4.92" />
            </svg>
          </div>
        </div>

        <div className="project-content">
          <h3 className="project-title">
          Make a Beautiful Brand on Schedule and Within Your Budget
          </h3>
          <p className="project-description">
          Launch your company with thousands of
          {" "}
            <span>design elements</span> design assets
          </p>

          <div className="project-features">
            <div className="feature-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-file"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              </svg>
              <p className="feature-text">Files for logo design</p>
            </div>

            <div className="feature-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trello"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <rect width="3" height="9" x="7" y="7" />
                <rect width="3" height="5" x="14" y="7" />
              </svg>
              <p className="feature-text">Manual of Branding</p>
            </div>

            <div className="feature-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-user-round"
              >
                <path d="M18 20a6 6 0 0 0-12 0" />
                <circle cx="12" cy="10" r="4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <p className="feature-text">Icons for Social Media</p>
            </div>
            <div className="feature-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-user-round"
              >
                <path d="M18 20a6 6 0 0 0-12 0" />
                <circle cx="12" cy="10" r="4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <p className="feature-text">Icons for Social Media</p>
            </div>
            <div className="feature-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-user-round"
              >
                <path d="M18 20a6 6 0 0 0-12 0" />
                <circle cx="12" cy="10" r="4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <p className="feature-text">Icons for Social Media</p>
            </div>
            <div className="feature-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-user-round"
              >
                <path d="M18 20a6 6 0 0 0-12 0" />
                <circle cx="12" cy="10" r="4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <p className="feature-text">Icons for Social Media</p>
            </div>
            <div className="feature-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-user-round"
              >
                <path d="M18 20a6 6 0 0 0-12 0" />
                <circle cx="12" cy="10" r="4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <p className="feature-text">Icons for Social Media</p>
            </div>

            <div className="feature-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-briefcase"
              >
                <rect width="18" height="14" x="3" y="7" rx="2" ry="2" />
                <path d="M8 7V5a4 4 0 0 1 8 0v2" />
              </svg>
              <p className="feature-text">Design of Stationery</p>
            </div>
          </div>

          <a href="/project-details" className="project-link">
            <button className="project-button">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >
                <line x1="5" x2="19" y1="12" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;
