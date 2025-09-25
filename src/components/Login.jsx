import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import github from '../assets/github.png';

function Login() {
  return (
    <div className="login-bg-wrapper">
      <div className="login-container">
        <form className="login-form">
          <h2>Login</h2>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
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
