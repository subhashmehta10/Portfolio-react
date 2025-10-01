import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import github from '../assets/github.png';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "kumarmehta172@gmail.com" && password === "Subhash@1234") {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-bg-wrapper">
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <Link to="/" className="back-home-btn" style={{ marginBottom: "0.7rem", display: "inline-block", textAlign: "left", color: "#8b5cf6", fontWeight: 600 }}>
            ← Return to Main Page
          </Link>
          <h2>Login</h2>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group" style={{ position: "relative" }}>
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{ paddingRight: "40px" }}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              {showPassword ? (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11C3.5 6 7.5 3 11 3C14.5 3 18.5 6 21 11C18.5 16 14.5 19 11 19C7.5 19 3.5 16 1 11Z" stroke="#8b5cf6" strokeWidth="2" />
                  <circle cx="11" cy="11" r="4" stroke="#8b5cf6" strokeWidth="2" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11C3.5 6 7.5 3 11 3C14.5 3 18.5 6 21 11C18.5 16 14.5 19 11 19C7.5 19 3.5 16 1 11Z" stroke="#8b5cf6" strokeWidth="2" />
                  <circle cx="11" cy="11" r="4" stroke="#8b5cf6" strokeWidth="2" />
                  <line x1="5" y1="17" x2="17" y2="5" stroke="#8b5cf6" strokeWidth="2" />
                </svg>
              )}
            </span>
          </div>
          {error && (
            <div style={{ color: "#ff4d4f", textAlign: "center", marginBottom: ".5rem" }}>{error}</div>
          )}
          <div className="forgot-password">
            <a href="#" onClick={e => { e.preventDefault(); alert('Password reset link sent to your email!'); }}>
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="login-btn">Login</button>
          <div className="social-login-options">
            <span style={{ display: "block", textAlign: "center", margin: "1rem 0 .5rem", color: "#e5e7eb" }}>Or login with</span>
            <div className="social-btn-group">
              <button type="button" className="social-btn google" onClick={() => alert('Google login coming soon!')}>
                <img src={google} alt="Google" className="social-icon" />
              </button>
              <button type="button" className="social-btn github" onClick={() => alert('GitHub login coming soon!')}>
                <img src={github} alt="GitHub" className="social-icon" />
              </button>
              <button type="button" className="social-btn facebook" onClick={() => alert('Facebook login coming soon!')}>
                <img src={facebook} alt="Facebook" className="social-icon" />
              </button>
            </div>
          </div>
          <div className="register-link">
            <span>Don't have an account? </span>
            <Link to="/register">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
