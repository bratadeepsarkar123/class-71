


import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCrZYd0NeUssLO4FD6kSvnhS79LbXzZgw0",
  authDomain: "e-library-3e64f.firebaseapp.com",
  projectId: "e-library-3e64f",
  storageBucket: "e-library-3e64f.appspot.com",
  messagingSenderId: "204851092078",
  appId: "1:204851092078:web:059aac7aa397cd0cfa647f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();