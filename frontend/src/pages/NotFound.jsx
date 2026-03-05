import React from "react";
import { useNavigate } from "react-router-dom";
import "./notfound.css"; // keep CSS separate (recommended)

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="page_404">
      <div className="page_404__inner">
        <div className="four_zero_four_bg">
          <h1 className="text-center">404 ERROR</h1>
        </div>

        <div className="contentBox">
          <h3 className="h2">Something Went Wrong..!</h3>
          <p>The page Not Available!</p>

          <button className="link_404" onClick={() => navigate("/")}>
            Go to Home
          </button>
        </div>
      </div>
    </section>
  );
}