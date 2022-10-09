// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJrhfbZ0HAxTJZmwURYMHw1_badrtyyww",
  authDomain: "react-cursos-b4808.firebaseapp.com",
  projectId: "react-cursos-b4808",
  storageBucket: "react-cursos-b4808.appspot.com",
  messagingSenderId: "578947866706",
  appId: "1:578947866706:web:8c2057b38f515605f3ff8b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore (FirebaseApp);