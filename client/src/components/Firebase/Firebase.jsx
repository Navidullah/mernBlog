// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env);
console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "thepulse-de422.firebaseapp.com",
  projectId: "thepulse-de422",
  storageBucket: "thepulse-de422.appspot.com",
  messagingSenderId: "249152809663",
  appId: "1:249152809663:web:5c6c9a5eed1070749c740a",
};
console.log(firebaseConfig.apiKey);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
