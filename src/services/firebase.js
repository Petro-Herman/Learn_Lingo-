// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/database";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBmJrsNcJql57rVXHwChdsrSJlzhyuzoDY",
//   authDomain: "teachers-62e82.firebaseapp.com",
//   databaseURL: "https://teachers-62e82-default-rtdb.firebaseio.com",
//   projectId: "teachers-62e82",
//   storageBucket: "teachers-62e82.firebasestorage.app",
//   messagingSenderId: "688940288311",
//   appId: "1:688940288311:web:d8a8c24dcb67706006b2b2",
//   measurementId: "G-W9QJRTE0E8",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // export const db = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBmJrsNcJql57rVXHwChdsrSJlzhyuzoDY",
  authDomain: "teachers-62e82.firebaseapp.com",
  databaseURL: "https://teachers-62e82-default-rtdb.firebaseio.com",
  projectId: "teachers-62e82",
  storageBucket: "teachers-62e82.firebasestorage.app",
  messagingSenderId: "688940288311",
  appId: "1:688940288311:web:d8a8c24dcb67706006b2b2",
  measurementId: "G-W9QJRTE0E8",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
