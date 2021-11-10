import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, DocumentData } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBRuztVoIhZwQygiWIk1ZEvGoDuRqFG4oo",
  authDomain: "portfolio-76725.firebaseapp.com",
  projectId: "portfolio-76725",
  storageBucket: "portfolio-76725.appspot.com",
  messagingSenderId: "34548147857",
  appId: "1:34548147857:web:5450aab0606b04a35e4130",
  measurementId: "G-6C83P6QCHN"
};

// Initialize Firebase
export const db = getFirestore(initializeApp(firebaseConfig));