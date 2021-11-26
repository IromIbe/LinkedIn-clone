import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2jAiynLPzf_1ZlOKk3HJZYr9wScstNvY",
  authDomain: "linkedin-clone-yt-7134c.firebaseapp.com",
  projectId: "linkedin-clone-yt-7134c",
  storageBucket: "linkedin-clone-yt-7134c.appspot.com",
  messagingSenderId: "508981943901",
  appId: "1:508981943901:web:916e74393ce23ffdf137b4",
  measurementId: "G-SWPG4C9HQ0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
