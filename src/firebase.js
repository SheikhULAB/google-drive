import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDdaxV7QpcFoUs0MmcQT4Xk0_7M2ulUDns",
    authDomain: "drive-52ea9.firebaseapp.com",
    projectId: "drive-52ea9",
    storageBucket: "drive-52ea9.appspot.com",
    messagingSenderId: "30713319530",
    appId: "1:30713319530:web:1c7106f46bb123deaa3a13"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth, provider, db, storage };