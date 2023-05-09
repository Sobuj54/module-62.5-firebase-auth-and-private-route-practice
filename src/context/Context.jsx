import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";
// create context and export it
export const AuthContext = createContext(null);

const auth = getAuth(app);

const Context = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user : ", currentUser);
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userInfo = { user, signUp, logIn };

  return (
    // set context provider
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default Context;
