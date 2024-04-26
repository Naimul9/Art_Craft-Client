
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAg3MznpksZ1RYiJ_MatjZMP_bPfqQ0IRg",
  authDomain: "assignment-10-58564.firebaseapp.com",
  projectId: "assignment-10-58564",
  storageBucket: "assignment-10-58564.appspot.com",
  messagingSenderId: "535173226816",
  appId: "1:535173226816:web:eb7680536c2dd615735aa5"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)