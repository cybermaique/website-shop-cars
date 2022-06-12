// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAGpRuZ8dDM6AzdpEDKTqvNaAAU9C7qrYU",
  authDomain: "react-upload-imagens.firebaseapp.com",
  projectId: "react-upload-imagens",
  storageBucket: "react-upload-imagens.appspot.com",
  messagingSenderId: "269087143496",
  appId: "1:269087143496:web:3f066cfbe7eb2f11734a7d",
  measurementId: "G-HZYBKHP51Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);