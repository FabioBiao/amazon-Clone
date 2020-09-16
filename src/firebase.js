import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAsCufSjPwV4-XhA1bwx31ao9_ex-sTcws",
    authDomain: "challenge-35e86.firebaseapp.com",
    databaseURL: "https://challenge-35e86.firebaseio.com",
    projectId: "challenge-35e86",
    storageBucket: "challenge-35e86.appspot.com",
    messagingSenderId: "328668127576",
    appId: "1:328668127576:web:86fcdb4819327c5f7bc52d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
