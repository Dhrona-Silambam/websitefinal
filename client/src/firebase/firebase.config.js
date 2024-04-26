// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth,GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCcqDq2LfWNl5H9VgcJvm7f4WRnxGu_kW8",
  authDomain: "login-and-register-8126b.firebaseapp.com",
  projectId: "login-and-register-8126b",
  storageBucket: "login-and-register-8126b.appspot.com",
  messagingSenderId: "491591066077",
  appId: "1:491591066077:web:20120561a7d9c7c9e4d634",
  measurementId: "G-P8E0E7QLJT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider=new GoogleAuthProvider();

export { auth,provider };
