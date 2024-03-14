import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCb-Fo84nM4PY1tIKXt7Z_Ki2kYboT1dmo",
  authDomain: "disneyplus-b6d80.firebaseapp.com",
  projectId: "disneyplus-b6d80",
  storageBucket: "disneyplus-b6d80.appspot.com",
  messagingSenderId: "424322525535",
  appId: "1:424322525535:web:00ab0e4c74bc0d8e89eeea",
  measurementId: "G-GGFY1ZQCZN",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
