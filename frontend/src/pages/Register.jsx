import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RegisterAction } from "../redux/AuthReducer/action";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/register.css";

const Register = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate

  const handleRegister = () => {
    dispatch(RegisterAction(newUser)); // Dispatch registration action
    alert("User registered successfully!"); // Show success message
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={newUser.username}
        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={newUser.password}
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
