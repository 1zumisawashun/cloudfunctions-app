import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAmMgMvoD2LYhpMbLZzXslXwLvn069Yp4Q",
    authDomain: "otsudori-7fdf5.firebaseapp.com",
    projectId: "otsudori-7fdf5",
    storageBucket: "otsudori-7fdf5.appspot.com",
    messagingSenderId: "792411023691",
    appId: "1:792411023691:web:4aadf3fbc6b964e73920ce",
    measurementId: "G-Q74WQ6S3S9"
  });
}

export default firebase;
