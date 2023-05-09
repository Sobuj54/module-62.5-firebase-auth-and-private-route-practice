import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-10 text-center border-2 border-primary rounded w-2/5 mx-auto p-7">
      <h4 className="text-3xl mb-4 font-semibold">Login</h4>
      <form className="w-64 mx-auto">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input  input-secondary w-full  max-w-xs mb-4"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input  input-secondary w-full mb-4  max-w-xs"
          required
        />
        <button className="btn btn-primary w-full">Login</button>
      </form>
      <div className="mt-3">
        <p>
          <small>
            New to this site?
            <Link to="/signup" className="text-emerald-700 ml-1">
              Signup
            </Link>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Login;
