import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <Link to="/" className="btn  btn-ghost normal-case text-xl">
        Home
      </Link>
      <Link to="/login" className="btn  btn-ghost normal-case text-xl">
        Login
      </Link>
      <Link to="/bookings" className="btn  btn-ghost normal-case text-xl">
        Bookings
      </Link>
    </div>
  );
};

export default Header;
