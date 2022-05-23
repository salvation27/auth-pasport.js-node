import React from 'react'
import './Navbar.css'
import {  Link} from "react-router-dom";
const Navbar = ({user}) => {
  const logout = () => {
   window.open("http://localhost:5000/auth/logout", "_self");
  }
  return (
    <div className="navbar">
      <div className="menu">
        <Link style={{ color: "white" }} to="/">
          Home
        </Link>{" "}
        |{" "}
        <Link style={{ color: "white" }} to="/login">
          Login
        </Link>
      </div>
      {user && (
        <div className="user_info">
          <div className="navbar_foto">
            <img src={user.photos[0].value} alt="" />
          </div>
          <div className="navbar_name">
            <h3>{user.displayName}</h3>
          </div>
        </div>
      )}
      <div className="navbar_btn">
        <button onClick={logout} style={{ marginLeft: "40px" }}>
          <h4>Logout</h4>
        </button>
      </div>
    </div>
  );
}

export default Navbar