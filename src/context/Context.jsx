import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";
// create context and export it
export const AuthContext = createContext(null);

const auth = getAuth(app);

const Context = ({ children }) => {
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userInfo = { signUp, logIn };

  return (
    // set context provider
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default Context;
