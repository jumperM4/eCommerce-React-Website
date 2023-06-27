import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOpO_e92f5fVEtYpcttCb-DLEOn3KQ1cw",
  authDomain: "clothing-shop-website.firebaseapp.com",
  projectId: "clothing-shop-website",
  storageBucket: "clothing-shop-website.appspot.com",
  messagingSenderId: "114639835773",
  appId: "1:114639835773:web:7bf8bd734d727e676bd714",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
