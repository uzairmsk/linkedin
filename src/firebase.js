import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBIMiBPPvVHfRH006fCRUzXEBbO-9RLyjM",
    authDomain: "linkedin-clone-66bc2.firebaseapp.com",
    projectId: "linkedin-clone-66bc2",
    storageBucket: "linkedin-clone-66bc2.appspot.com",
    messagingSenderId: "105085445584",
    appId: "1:105085445584:web:5e92c2a11288ce26bb85d5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth };