import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../redux/AuthReducer/action"; // Update the path to your actions file
import { Navigate } from "react-router-dom"; // If using React Router for navigation
import "../styles/login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { isLoading, isAuth, error } = useSelector((state) => state.auth); // Replace 'auth' with your reducer name

  const handleLogin = () => {
    if (!credentials.username || !credentials.password) {
      alert("Please fill in all fields");
      return;
    }
    dispatch(LoginAction(credentials)); // Dispatch login action with user credentials
  };

  // Redirect user after successful login
  if (isAuth) {
    alert("Login successful!");
    return <Navigate to="/dashboard" />; // Redirect to dashboard after successful login
  }

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <input
        type="text"
        className="login-input"
        placeholder="Username"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        type="password"
        className="login-input"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button
        className="login-button"
        onClick={handleLogin}
        disabled={isLoading}
      >
        {isLoading ? "Logging in..." : "Login"}
      </button>
      {error && <p className="login-error">Login failed. Please try again.</p>}
    </div>
  );
};

export default Login;
