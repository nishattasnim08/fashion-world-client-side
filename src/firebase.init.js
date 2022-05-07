// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0562WvaH4qolHj0enHqHdZS-v4Du_iNQ",
  authDomain: "fashion-world-60392.firebaseapp.com",
  projectId: "fashion-world-60392",
  storageBucket: "fashion-world-60392.appspot.com",
  messagingSenderId: "467384410878",
  appId: "1:467384410878:web:dc2934a38dfdfdcd5abbaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;