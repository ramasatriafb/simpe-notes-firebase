import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAL0BTvTVL5xPamGzfzfKo44NTiNP_DcPk",
    authDomain: "simple-notes-firebase-6f9cc.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-6f9cc.firebaseio.com",
    projectId: "simple-notes-firebase-6f9cc",
    storageBucket: "simple-notes-firebase-6f9cc.appspot.com",
    messagingSenderId: "614177179168",
    appId: "1:614177179168:web:5b31ad6281bdceb592de45"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;