import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsQIWF0Dn4UCZVmah9b43Ft63__s7-Otg",
  authDomain: "cars-shop-62a16.firebaseapp.com",
  projectId: "cars-shop-62a16",
  storageBucket: "cars-shop-62a16.appspot.com",
  messagingSenderId: "730434668287",
  appId: "1:730434668287:web:decd145bd4f40a4f69eeca",
  measurementId: "G-WD8CDMV739",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
