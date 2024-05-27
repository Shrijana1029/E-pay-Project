import React from "react";
import "./../component/Register.css";
import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div class="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
      <div class="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
        <div class="max-w-xl mb-6">
          {/* <h2 class="max-w-lg mb-2 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none">
        Register US
      </h2> */}
          <p class="text-base text-gray-700 md:text-lg">
            <h1>Simple & Fast Payment</h1>
          </p>
        </div>
        <div class="flex items-center">
          <div class="btn-group">
            <a href="/Register" class="btn btn-dark active" aria-current="page">
              Register Now
            </a>
          </div>
        </div>
      </div>
      <div className="register-container">
        <div className="register-form">
          <h2>CREATE ACCOUNT</h2>
          <form action="/register">
            <input
              type="text"
              name="name"
              value={user.name}
              placeholder="Enter your Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              value={user.email}
              placeholder="Enter your Email"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="cpassword"
              value={user.cpassword}
              placeholder="Confirm password"
              onChange={handleChange}
              required
            />
            <div className="terms">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                I agree to all statements in <a href="#">Terms of Service</a>
              </label>
            </div>

            <button type="submit">SIGN UP</button>
          </form>
          <p>
            Have already an account? <a href="/Login">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
