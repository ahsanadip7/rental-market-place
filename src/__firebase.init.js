// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDM77bkg1uvxvQrKVbiee8Xdl4T5BAgFI",
  authDomain: "rental-marketplace-a88e5.firebaseapp.com",
  projectId: "rental-marketplace-a88e5",
  storageBucket: "rental-marketplace-a88e5.firebasestorage.app",
  messagingSenderId: "860894111602",
  appId: "1:860894111602:web:68ee7ab8c42d88b59b5feb",
  measurementId: "G-49924TMEP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)