// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNTjB5i2l1aHeDUoSnfMyo3KuPc5k9mpE",
  authDomain: "auth-desafio-ii-fza.firebaseapp.com",
  projectId: "auth-desafio-ii-fza",
  storageBucket: "auth-desafio-ii-fza.firebasestorage.app",
  messagingSenderId: "713455670987",
  appId: "1:713455670987:web:3c6390ad366296584cad4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app