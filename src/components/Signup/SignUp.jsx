import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Context";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);

  const handleSignUP = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signUp(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-10 text-center border-2 border-primary rounded w-2/5 mx-auto p-7">
      <h4 className="text-3xl mb-4 font-semibold">Signup</h4>
      <form onSubmit={handleSignUP} className="w-64 mx-auto">
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="input  input-secondary w-full  max-w-xs mb-4"
        />
        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          className="input  input-secondary w-full mb-4  max-w-xs"
        />
        <input
          required
          type="password"
          name="confirm"
          placeholder="Confirm Password"
          className="input  input-secondary w-full mb-4  max-w-xs"
        />
        <button className="btn btn-primary w-full">Signup</button>
      </form>
      <div className="mt-3">
        <p>
          <small>
            Already have an account?
            <Link to="/login" className="text-emerald-700 ml-1">
              Login
            </Link>
          </small>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
