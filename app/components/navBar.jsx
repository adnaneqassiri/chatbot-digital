"use client";
// Import the necessary modules
import { useState, useEffect } from "react";
import Image from "next/image";
import { googleProvider, auth } from "../firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import Link from "next/link";

export default function NavBar() {
  // State to track if the user is logged in
  const [isLogged, setIsLogged] = useState(
    typeof window !== "undefined" && localStorage.getItem("isLogged") === "true"
  );

  // State to store user information, including profile photo
  let [userInfo, setUserInfo] = useState({
    photoProfile:
      typeof window !== "undefined" && localStorage.getItem("photoUrl")
        ? localStorage.getItem("photoUrl")
        : null,
  });

  // Function to sign in with Google
  const signInwithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  // Effect to run on component mount to check authentication status
  useEffect(() => {
    // Observer to watch for changes in authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in
        setIsLogged(true);
        localStorage.setItem("isLogged", "true");
        localStorage.setItem("photoUrl", `${user.photoURL}`);
        setUserInfo({ photoProfile: user.photoURL });
      } else {
        // User is not logged in
        setIsLogged(false);
        localStorage.removeItem("isLogged");
        localStorage.removeItem("photoUrl");
        setUserInfo({ photoProfile: null });
      }
    });

    // Unsubscribe from the observer when the component unmounts
    return () => unsubscribe();
  }, []);

  // Function to log out
  const logOut = async () => {
    await signOut(auth);
    setIsLogged(false);
    localStorage.setItem("isLogged", "false");
  };

  // Render the navigation bar
  return (
    <nav className="main-nav">
      <div className="container">
        <div className="logo">
          <h1>NEXTGEN</h1>
        </div>
        <ul>
          <li>
            {/* Conditionally render based on authentication status */}
            {isLogged ? (
              // Display user information and logout button if logged in
              <div className="if-logged">
                <Image
                  className="profile-image"
                  src={`${userInfo.photoProfile}`}
                  alt="user profile"
                  width={38}
                  height={38}
                />
                <button onClick={logOut}>LOGOUT</button>
              </div>
            ) : (
              // Display Google sign-in button if not logged in
              <button onClick={signInwithGoogle}>SIGN WITH GOOGLE</button>
            )}
          </li>
          <Link
            className="btn"
            href="professeur"
            onClick={() => router.push("/professeurs")}
          >
            Espace Professeurs
          </Link>
        </ul>
      </div>
    </nav>
  );
}
