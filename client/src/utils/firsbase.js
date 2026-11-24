import { initializeApp } from "firebase/app";
import {getAuth} from "firsbae/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "evalhire-8ca71.firebaseapp.com",
  projectId: "evalhire-8ca71",
  storageBucket: "evalhire-8ca71.firebasestorage.app",
  messagingSenderId: "507512711159",
  appId: "1:507512711159:web:035b8225ccaac0895370f2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}