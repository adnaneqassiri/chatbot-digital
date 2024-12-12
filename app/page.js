"use client";
import MainComponent from "./components/mainComponent";
import { useUser } from "./context/userContext";
import { googleProvider, auth } from "./firebase";
import { signInWithPopup } from "firebase/auth";
export default function Home() {
  const signInwithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  const userObject = useUser();
  console.log(userObject);
  return (
    <main className="container main-main">
      {userObject?.uid ? (
        <MainComponent />
      ) : (
        <div className="if-not-logged">
          <p>
            Pour utiliser l'application, inscrivez-vous d'abord avec Google.
          </p>
          <button className="btn" onClick={signInwithGoogle}>
            SIGN IN
          </button>
        </div>
      )}
    </main>
  );
}
