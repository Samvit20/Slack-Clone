import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAF-UNW2D-sqnfk_BL4jouYtYHJFq9at3g",
    authDomain: "slack-clone-cbed1.firebaseapp.com",
    projectId: "slack-clone-cbed1",
    storageBucket: "slack-clone-cbed1.appspot.com",
    messagingSenderId: "732380486587",
    appId: "1:732380486587:web:41bad3cf24de00a735029e"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider,db};