import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);
    // process and send to API
  };

  return (
    <div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>

      <div className="login-wrapper">
        <div className="login-side">
          <div className="my-form__wrapper">
            <div className="login-welcome-row">
              <h1>Welcome back 👏</h1>
              <p>Please enter your details!</p>
            </div>

            <form className="my-form" onSubmit={handleSubmit}>
              {/* Social login */}
              <div className="socials-row">
                <a href="#" title="Use Google">
                  <img src="/Login page/Assests/Gmail Icon.png" alt="Google" />
                  Log in with Google
                </a>
                <a href="#" title="Use Apple">
                  <img
                    className="apple"
                    src="/Login page/Assests/APPLE2.png"
                    alt="Apple"
                  />
                  Log in with Apple
                </a>
              </div>

              <div className="divider">
                <div className="divider-line"></div>
                Or
                <div className="divider-line"></div>
              </div>

              {/* Email field */}
              <div className="text-field">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <img
                  className="email"
                  alt="Email Icon"
                  title="Email Icon"
                  src="/Login page/Assests/EMAIL.png"
                />
              </div>

              {/* Password field */}
              <div className="text-field">
                <label htmlFor="password">Password:</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  title="Minimum 6 characters at least 1 Alphabet and 1 Number"
                  pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <img
                  className="lock"
                  alt="Password Icon"
                  src="/Login page/Assests/PASSWORD.png"
                />
              </div>

              <input
                type="submit"
                className="my-form__button"
                value="Login"
              />

              {/* Actions */}
              <div className="my-form__actions">
                <div className="my-form__row">
                  <span>Did you forget your password?</span>
                  <a href="#" title="Reset Password">
                    Reset Password
                  </a>
                </div>
                <div className="my-form__signup">
                  <a href="#" title="Create Account">
                    Create Account
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
