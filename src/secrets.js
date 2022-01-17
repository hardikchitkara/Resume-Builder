import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
let firebaseConfig = {
  apiKey: "AIzaSyB6d4JM5DPguTT1XQsVYZQ3oDRt-g35qVs",
  authDomain: "resume-builder-62d78.firebaseapp.com",
  projectId: "resume-builder-62d78",
  storageBucket: "resume-builder-62d78.appspot.com",
  messagingSenderId: "234413844597",
  appId: "1:234413844597:web:5c6d8c60777f37fcfbb03c",
  measurementId: "G-TY7EX2101Y"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebaseConfig;

