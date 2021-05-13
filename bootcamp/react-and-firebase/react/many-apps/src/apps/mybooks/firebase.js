// https://firebase.google.com/docs/web/setup
import firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: 'bootcamp-mybooks.firebaseapp.com',
  projectId: 'bootcamp-mybooks',
  storageBucket: 'bootcamp-mybooks.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
