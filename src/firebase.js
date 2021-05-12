import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDbXFJ3-zZht_TcRcBsWx-auIi0j_coqJ0",
  authDomain: "disney-clone81.firebaseapp.com",
  projectId: "disney-clone81",
  storageBucket: "disney-clone81.appspot.com",
  messagingSenderId: "454214132165",
  appId: "1:454214132165:web:0a782f85637998164eebac",
  measurementId: "G-RD8EP41GXK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
