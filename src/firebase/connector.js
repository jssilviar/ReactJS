// Import the functions you need from the SDKs you need
import { initializeApp, firestore } from "firebase/app";
//import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs7A-Jn7hSy1eMfT38Ti8ISUte1WyvNlE",
  authDomain: "ladydicakes-f8ed1.firebaseapp.com",
  projectId: "ladydicakes-f8ed1",
  storageBucket: "ladydicakes-f8ed1.appspot.com",
  messagingSenderId: "420834755829",
  appId: "1:420834755829:web:4e8bbde4ce7f020bbbf1bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function getFirebaseApp(){
    return app
}

export function getFirestore(){
    return firestore(app)
}