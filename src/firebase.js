import * as firebase from "firebase";
import { initializeApp } from "firebase/app";

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

const auth =firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();
const storage= firebase.storage();


export {auth , provider, storage} ;
export default db;