import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAyYuCP4zEWEi_--f9eth6okGXmQsOjjEs",
  authDomain: "fir-531c4.firebaseapp.com",
  projectId: "fir-531c4",
  storageBucket: "fir-531c4.appspot.com",
  messagingSenderId: "651152455344",
  appId: "1:651152455344:web:c84873a802f09c0c812d75",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
