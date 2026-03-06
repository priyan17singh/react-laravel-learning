import { Link } from "react-router-dom";
import axiosClient from "./axios-client.js";
import { useRef, useState } from "react";
import { useStateContext } from "../context/ContextProvider.jsx";
import "./auth.css"

export default function Signup() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);

  const { setUser, setToken } = useStateContext();

  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [showConfirmPw, setShowConfirmPw] = useState(false);

  const onSubmit = async (ev) => {
    ev.preventDefault();
    setErrors(null);

    const payload = {
      name: nameRef.current?.value?.trim(),
      email: emailRef.current?.value?.trim(),
      password: passwordRef.current?.value,
      password_confirmation: passwordConfirmationRef.current?.value,
    };
    console.log(payload);

    setLoading(true);
    try {
      const { data } = await axiosClient.post("/signup", payload);
      setUser(data.user);
      setToken(data.token);
    } catch (err) {
      const response = err.response;
      // console.log("Signup error:", response);
      if (response?.status === 422) {
        // Laravel validation errors format: { errors: { field: ["msg"] } }
        setErrors(response.data?.errors || { error: ["Please check your inputs."] });
      } else if (response?.status === 429) {
        setErrors({ error: ["Too many attempts. Please try again in a minute."] });
      } else {
        setErrors({ error: ["Something went wrong. Please try again."] });
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
            <div className="brand-mark">✨</div>
            <div>
              <h2 className="brand-title">Create your account</h2>
              <p className="brand-subtitle">
                Join us and start using your dashboard in seconds.
              </p>
            </div>
          </div>

          <div className="auth-bullets">
            <div className="bullet">
              <span className="dot" />
              <span>Quick signup with validation</span>
            </div>
            <div className="bullet">
              <span className="dot" />
              <span>Secure token-based access</span>
            </div>
          </div>
        </div>

        {/* Right side (form) */}
        <div className="auth-card">
          <div className="auth-card-header">
            <h1 className="auth-title">Sign up</h1>
            <p className="auth-desc">
              Fill in your details to create a new account.
            </p>
          </div>

          {errors && (
            <div className="auth-alert" role="alert">
              <span className="auth-alert-icon">!</span>
              <div>
                {Object.keys(errors).map((key) => (
                  <p key={key} style={{ margin: 0 }}>
                    {errors[key][0]}
                  </p>
                ))}
              </div>
            </div>
          )}

          <form className="auth-form" onSubmit={onSubmit}>
            <label className="auth-label">
              Full name
              <div className="auth-input-wrap">
                <span className="auth-icon" aria-hidden="true">👤</span>
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                  className="auth-input"
                />
              </div>
            </label>

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
                  placeholder="Create a password"
                  autoComplete="new-password"
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

            <label className="auth-label">
              Confirm password
              <div className="auth-input-wrap">
                <span className="auth-icon" aria-hidden="true">✅</span>
                <input
                  ref={passwordConfirmationRef}
                  type={showConfirmPw ? "text" : "password"}
                  placeholder="Repeat your password"
                  autoComplete="new-password"
                  required
                  className="auth-input"
                />
                <button
                  type="button"
                  className="pw-toggle"
                  onClick={() => setShowConfirmPw((s) => !s)}
                  aria-label={showConfirmPw ? "Hide password" : "Show password"}
                >
                  {showConfirmPw ? "Hide" : "Show"}
                </button>
              </div>
            </label>

            <button className="auth-btn" disabled={loading}>
              {loading ? <span className="spinner" /> : "Create account"}
            </button>

            <p className="auth-foot">
              Already registered? <Link to="/login">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}