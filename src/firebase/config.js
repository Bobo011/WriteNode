
import { initializeApp } from "firebase/app";
import {getFirestore}  from 'firebase/firestore'
import { getAuth, GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBjWybwjyb-bWHyTpLDuZzIWkNY1XY4HP8",
  authDomain: "boreal-analog-239910.firebaseapp.com",
  projectId: "boreal-analog-239910",
  storageBucket: "boreal-analog-239910.appspot.com",
  messagingSenderId: "937524896619",
  appId: "1:937524896619:web:47f9c45668417221d5622e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();

