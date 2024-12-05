import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LogoutAction } from "../redux/AuthReducer/action";
import "../styles/navbar.css";

const Navbar = () => {
  const { isAuth, userName } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initial = userName ? userName.charAt(0).toUpperCase() : "";

  const handleLogout = () => {
    dispatch(LogoutAction());
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        {isAuth ? (
          // If authenticated, show Dashboard and Logout
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        ) : (
          // If not authenticated, show Register and Login
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        )}
      </div>

      {isAuth && (
        <div className="nav-right">
          <div className="profile">
            <div className="avatar">{initial}</div>
            <div className="profile-details">{userName}</div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
