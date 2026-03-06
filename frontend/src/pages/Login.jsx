import "./auth.css"
import { Link } from "react-router-dom";
import axiosClient from "./axios-client.js";
import { useRef, useState } from "react";
import { useStateContext } from "../context/ContextProvider.jsx";

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { setUser, setToken } = useStateContext();

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);

  const onSubmit = async (ev) => {
    ev.preventDefault();
    setMessage(null);

    const payload = {
      email: emailRef.current?.value?.trim(),
      password: passwordRef.current?.value,
    };

    setLoading(true);
    try {
      const { data } = await axiosClient.post("/login", payload);
      setUser(data.user);
      setToken(data.token);
    } catch (err) {
      const response = err.response;
      // Laravel often returns 422 for validation / wrong creds message
      if (response?.status === 422) {
        setMessage(response.data?.message || "Invalid email or password.");
      } else if (response?.status === 429) {
        setMessage("Too many attempts. Please try again in a minute.");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-shell">
        {/* Left side (branding) */}
        <div className="auth-left">
          <div className="brand">
            <div className="brand-mark">⚡</div>
            <div>
              <h2 className="brand-title">Welcome back</h2>
              <p className="brand-subtitle">
                Login to continue to your dashboard and manage your account.
              </p>
            </div>
          </div>

          <div className="auth-bullets">
            <div className="bullet">
              <span className="dot" />
              <span>Fast and secure authentication</span>
            </div>
            <div className="bullet">
              <span className="dot" />
              <span>Token stored with context state</span>
            </div>
            <div className="bullet">
              <span className="dot" />
              <span>Clean UI + validation feedback</span>
            </div>
          </div>
        </div>

        {/* Right side (form) */}
        <div className="auth-card">
          <div className="auth-card-header">
            <h1 className="auth-title">Sign in</h1>
            <p className="auth-desc">Enter your credentials to access your account.</p>
          </div>

          {message && (
            <div className="auth-alert" role="alert">
              <span className="auth-alert-icon">!</span>
              <p>{message}</p>
            </div>
          )}

          <form className="auth-form" onSubmit={onSubmit}>
            <label className="auth-label">
              Email
              <div className="auth-input-wrap">
                <span className="auth-icon" aria-hidden="true">✉️</span>
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="auth-input"
                />
              </div>
            </label>

            <label className="auth-label">
              Password
              <div className="auth-input-wrap">
                <span className="auth-icon" aria-hidden="true">🔒</span>
                <input
                  ref={passwordRef}
                  type={showPw ? "text" : "password"}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                  className="auth-input"
                />
                <button
                  type="button"
                  className="pw-toggle"
                  onClick={() => setShowPw((s) => !s)}
                  aria-label={showPw ? "Hide password" : "Show password"}
                >
                  {showPw ? "Hide" : "Show"}
                </button>
              </div>
            </label>

            <button className="auth-btn" disabled={loading}>
              {loading ? <span className="spinner" /> : "Login"}
            </button>

            <p className="auth-foot">
              Not registered? <Link to="/signup">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}