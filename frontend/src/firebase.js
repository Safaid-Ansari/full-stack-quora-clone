// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyAMC5PoL2SRvi8TyvGckV2VzKx0GqK5_HM",
  authDomain: "quora-clone-mern-f1ff2.firebaseapp.com",
  projectId: "quora-clone-mern-f1ff2",
  storageBucket: "quora-clone-mern-f1ff2.appspot.com",
  messagingSenderId: "61812781410",
  appId: "1:61812781410:web:2fc092f8b9d1bda3f37c3b",
  measurementId: "G-MW5HLDR43N"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
