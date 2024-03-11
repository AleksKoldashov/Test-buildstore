import { initializeApp } from "firebase/app";
console.log(process.env);
const firebaseConfig = {
  apiKey: "AIzaSyAkeO2z17JJl-XyIsWejhk2mqvp87c5uEE",
  authDomain: "buildstore-auth.firebaseapp.com",
  projectId: "buildstore-auth",
  storageBucket: "buildstore-auth.appspot.com",
  messagingSenderId: "541344873379",
  appId: "1:541344873379:web:d45a4d6c923ee453adf816"
};


const app = initializeApp(firebaseConfig);


// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_FIREBASE_APP_ID,
// databaseURL: process.env.REACT_APP_FIREBASE_DATA_BASE_URL