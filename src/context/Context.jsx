import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
// create context and export it
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // getting the currently logged in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user : ", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // login with google
  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // handling sing up
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // handling log in
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // handling sign out
  const logOut = () => {
    return signOut(auth);
  };

  const userInfo = {
    user,
    loading,
    signUp,
    logIn,
    logOut,
    googleLogIn,
  };

  return (
    // set context provider
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default Context;
