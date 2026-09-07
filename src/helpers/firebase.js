import firebase from "firebase/app"
import "firebase/database"

// Firebase configuration
// Set these values in your .env file (prefixed with REACT_APP_ for Create React App)
// or replace the defaults below with your own Firebase project credentials.
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "",
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL || "",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "",
}

// Only initialize if config is provided
if (firebaseConfig.apiKey && firebaseConfig.databaseURL) {
  firebase.initializeApp(firebaseConfig)
} else {
  console.warn(
    "Firebase not configured. Add REACT_APP_FIREBASE_* variables to your .env file. " +
    "See .env.example for the required keys."
  )
  // Initialize with empty config to prevent crashes — reads will return empty data
  firebase.initializeApp({
    apiKey: "placeholder",
    databaseURL: "https://placeholder-default-rtdb.firebaseio.com",
    projectId: "placeholder",
  })
}

export default firebase
export const database = firebase.database()
