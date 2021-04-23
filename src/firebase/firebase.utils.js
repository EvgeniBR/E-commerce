import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyARr86kHJG-MGUHipn1wCxXVpgzPNjCuSk",
    authDomain: "first-e-commerce-project-3b0e0.firebaseapp.com",
    projectId: "first-e-commerce-project-3b0e0",
    storageBucket: "first-e-commerce-project-3b0e0.appspot.com",
    messagingSenderId: "440454154517",
    appId: "1:440454154517:web:68647969990c83a32c011c",
    measurementId: "G-0NSCMHL3SD"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;

