import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import "../../css/login.css";
import Navbar from "../MainPage/Navbar";

export default function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorClass, setErrorClass] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") setUserName(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userName === "" || password === "") {
      setMessage("⚠️ Please fill all the fields");
      setErrorClass("error-box shake");
      setTimeout(() => setErrorClass("error-box"), 500);
      return;
    }

    // Dummy login logic
    if (userName.startsWith("doc") && password === "doc@123") {
      setIsLoggedIn(true);
      setMessage("");
      setTimeout(() => navigate("/doctorDashboard"), 2000);
    } else if (userName.startsWith("pat") && password === "pat@123") {
      setIsLoggedIn(true);
      setMessage("");
      setTimeout(() => navigate("/patientDashboard"), 2000);
    } else {
      setMessage("Invalid credentials. Try docxxx/doc@123 or patxxx/pat@123");
      setErrorClass("error-box shake");
      setTimeout(() => setErrorClass("error-box"), 500);
    }

    /* 
    // Uncomment this for backend integration
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        username: userName,
        password: password,
      });

      const { role } = response.data;

      if (role === "doctor") {
        navigate("/doctorDashboard");
      } else if (role === "patient") {
        navigate("/patientDashboard");
      } else {
        setMessage("Unauthorized Role");
      }
    } catch (error) {
      setMessage("Invalid credentials");
    }
    */
  };

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="login-body">
          {isLoggedIn ? (
            <div className="success-screen">
              <b>Login Successful</b>
              <p>Redirecting...</p>
            </div>
          ) : (
            <div className="card login-card">
              <div className="card-body">
                <h1 className="login-title">Log In</h1>
                {message && <div className={errorClass}>{message}</div>}
                <form className="login-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter User ID"
                    className="input-sec"
                    style={{ borderRadius: "5px" }}
                    onChange={handleInputChange}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    className="input-sec"
                    style={{ borderRadius: "5px" }}
                    onChange={handleInputChange}
                  />
                  <button
                    type="submit"
                    className="btn submit-button btn-outline-success m-4"
                  >
                    Submit
                  </button>
                  <p className="text-center mt-3">
                    Don’t have an account?{" "}
                    <a href="/signup" style={{ textDecoration: "underline" }}>
                      Sign up here
                    </a>
                  </p>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}