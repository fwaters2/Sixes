import firebase from "firebase/app";

import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCWku9WGnIs4Dpf6cBcFnV9qBKJfhyEDVY",
  authDomain: "sixes-305b1.firebaseapp.com",
  databaseURL: "https://sixes-305b1.firebaseio.com",
  projectId: "sixes-305b1",
  storageBucket: "sixes-305b1.appspot.com",
  messagingSenderId: "455398186812",
  appId: "1:455398186812:web:c2cdb53591f86aa3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
