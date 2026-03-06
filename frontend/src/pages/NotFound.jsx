import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./NotFound.css";

function GoBackButton() {
  const navigate = useNavigate();
  return (
    <button className="pnf-btn pnf-btn--ghost" onClick={() => navigate(-1)}>
      Go back
    </button>
  );
}

export default function NotFound() {
  return (
    <section className="pnf">
      <div className="pnf-container">
        <div className="pnf-hero">
          <p className="pnf-kicker">404 error</p>
          <h1 className="pnf-title">We lost this page</h1>
          <p className="pnf-subtitle">
            We searched high and low, but couldn’t find what you’re looking for.
            Let’s find a better place for you to go.
          </p>

          <div className="pnf-actions">
            <GoBackButton />
            <Link to="/" className="pnf-link">
              <button className="pnf-btn pnf-btn--primary">Take me home</button>
            </Link>
          </div>
        </div>

        <div className="pnf-grid">
          <div className="pnf-card">
            <span className="pnf-icon" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="pnf-svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </span>

            <h3 className="pnf-cardTitle">Documentation</h3>
            <p className="pnf-cardText">Dive in to learn all about our product.</p>

            <Link to="/about" className="pnf-cardLink">
              <span>Start learning</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="pnf-arrow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>

          <div className="pnf-card">
            <span className="pnf-icon" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="pnf-svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </span>

            <h3 className="pnf-cardTitle">Our posts</h3>
            <p className="pnf-cardText">Read the latest posts on our blog.</p>

            <Link to="/posts" className="pnf-cardLink">
              <span>View latest posts</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="pnf-arrow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>

          <div className="pnf-card">
            <span className="pnf-icon" aria-hidden="true" style={{width: '1.25rem',height: '1.25rem'}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="pnf-svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                />
              </svg>
            </span>

            <h3 className="pnf-cardTitle">Chat to us</h3>
            <p className="pnf-cardText">Can’t find what you’re looking for?</p>

            <a href="#" className="pnf-cardLink">
              <span>Chat to our team</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="pnf-arrow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


