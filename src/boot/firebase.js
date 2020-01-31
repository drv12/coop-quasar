import * as firebase from  "firebase/app"


import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBhmGWgvFi2c9wTx_Sqnjs43PaaB1Li8y8",
  authDomain: "coop-quasardb.firebaseapp.com",
  databaseURL: "https://coop-quasardb.firebaseio.com",
  projectId: "coop-quasardb",
  storageBucket: "coop-quasardb.appspot.com",
  messagingSenderId: "817220367490",
  appId: "1:817220367490:web:3596cf24435329a51cb09b",
  measurementId: "G-RJYPGWHR8P"
};
 // Initialize Firebase
 let firebaseApp = firebase.initializeApp(firebaseConfig);
 let firebaseAuth = firebaseApp.auth();
 let firebaseDb = firebaseApp.firestore();
 console.log(firebaseApp)

 export {firebaseAuth, firebaseDb}