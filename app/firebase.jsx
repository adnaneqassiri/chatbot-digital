import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkb53RYBAKnnypwfpDIRJGO2lhvOa43Pw",
  authDomain: "chatbot-digital-skills.firebaseapp.com",
  projectId: "chatbot-digital-skills",
  storageBucket: "chatbot-digital-skills.firebasestorage.app",
  messagingSenderId: "635411796807",
  appId: "1:635411796807:web:88e453418d38772d943262",
  measurementId: "G-G3R16C04SE",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider };
