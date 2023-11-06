import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDyOPiIYuyKsCh-Z_xUHOCSztkd5dHKYc8",
  authDomain: "fir-auth-d981d.firebaseapp.com",
  projectId: "fir-auth-d981d",
  storageBucket: "fir-auth-d981d.appspot.com",
  messagingSenderId: "635777009213",
  appId: "1:635777009213:web:7d7ab87a05421fb0798c54",
  measurementId: "G-PTYZY65X4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export{app, auth};