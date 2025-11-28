import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAicohM2K8Uo79JnQK8WWA-HqmuQQM3bHM",
  authDomain: "uber-next-clone-live-f5d4e.firebaseapp.com",
  projectId: "uber-next-clone-live-f5d4e",
  storageBucket: "uber-next-clone-live-f5d4e.appspot.com",
  messagingSenderId: "538715933132",
  appId: "1:538715933132:web:ce289ce3aa7318d054b569"


  //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }