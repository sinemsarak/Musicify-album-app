import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBh25gfxgYNPjJ-dDkSd0W5JtfXtq26I8Q",
  authDomain: "uretken-academy-final-project.firebaseapp.com",
  projectId: "uretken-academy-final-project",
  storageBucket: "uretken-academy-final-project.appspot.com",
  messagingSenderId: "643971114139",
  appId: "1:643971114139:web:722ebc7a4e8a41c58c123e",
  measurementId: "G-W8GT0XLSN8"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
