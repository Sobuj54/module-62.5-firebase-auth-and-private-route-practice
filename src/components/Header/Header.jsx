import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Context";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("succesfully logged out");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
      {user && (
        <>
          {user.email}
          <button onClick={handleLogOut} className="btn btn-sm btn-active ">
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default Header;
