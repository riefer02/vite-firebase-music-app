import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  // databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};
let firebaseApp;
if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(config);
} else {
  firebaseApp = firebase.app(); // if already initialized, use that one
}
const db = firebaseApp.firestore();

export const storage = firebaseApp.storage();

export default db;
