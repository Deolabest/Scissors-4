// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDILwqkgrfzGrK62mnAeYTbFs9H_dg_f_U",
  authDomain: "duplicate-617ae.firebaseapp.com",
  projectId: "duplicate-617ae",
  storageBucket: "duplicate-617ae.appspot.com",
  messagingSenderId: "28116112094",
  appId: "1:28116112094:web:9e3e69cad61ebc1873684f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth (app);