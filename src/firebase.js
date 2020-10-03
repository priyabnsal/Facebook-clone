import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD1xFvgyZ7YZnH0AuI0tP0dAGBjq3gklis",
    authDomain: "facebook-clone-bypriya.firebaseapp.com",
    databaseURL: "https://facebook-clone-bypriya.firebaseio.com",
    projectId: "facebook-clone-bypriya",
    storageBucket: "facebook-clone-bypriya.appspot.com",
    messagingSenderId: "207942635383",
    appId: "1:207942635383:web:134c09347707d4391bdb72",
    measurementId: "G-JNX9HFGPCN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;