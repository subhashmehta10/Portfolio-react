
import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (name && email && password) {
      const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
      users.push({ name, email, password });
      localStorage.setItem("registeredUsers", JSON.stringify(users));
      setSuccess("Registration successful!");
      setName("");
      setEmail("");
      setPassword("");
      setTimeout(() => setSuccess(""), 3000);
    }
  };

  return (
    <div className="register-bg-wrapper">
      <div className="register-container">
        <form className="register-form" onSubmit={handleRegister}>
          <h2>Register</h2>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
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
          <button type="submit" className="register-btn">Register</button>
          {success && <div style={{ color: '#22c55e', textAlign: 'center', marginTop: '10px' }}>{success}</div>}
          <div className="login-link">
            <span>Already registered? </span>
            <Link to="/login">Login here</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
