
import 'firebase/compat/firestore';
import { getStorage, ref } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCcZvLzVDDPL1gyvY8fsj_Pxn0-k3LV_-E",
    authDomain: "linkedin-clone2-20bf1.firebaseapp.com",
    projectId: "linkedin-clone2-20bf1",
    storageBucket: "linkedin-clone2-20bf1.appspot.com",
    messagingSenderId: "711680565132",
    appId: "1:711680565132:web:984055392c473c28a580a9"
  };

const firebaseApp= firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();
const provider = new GoogleAuthProvider();

const auth = getAuth();

const storage = getStorage();


export {auth, storage,provider, db} ;
export default firebase;