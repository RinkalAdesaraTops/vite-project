// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcvwL7djMBSVzyEx0we-QLO1n7bIsorQc",
  authDomain: "fir-repeatcrud.firebaseapp.com",
  projectId: "fir-repeatcrud",
  storageBucket: "fir-repeatcrud.appspot.com",
  messagingSenderId: "111035404865",
  appId: "1:111035404865:web:0d79fb6278ad91f740ecc0",
  measurementId: "G-S3434MMM92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}

//addDoc,updateDoc,deleteDoc,snapshot