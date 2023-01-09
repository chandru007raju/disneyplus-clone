// import firebase from "firebase/compat/app";
import firebase from 'firebase';
// import 'firebase/compat/auth';
// import 'firebase/compat/database';

  const firebaseConfig = {
  apiKey: "AIzaSyDcH_9YepnZqqeChl7wbCmpidZ8yjjn2DA",
  authDomain: "disneyplus-forlearning.firebaseapp.com",
  projectId: "disneyplus-forlearning",
  storageBucket: "disneyplus-forlearning.appspot.com",
  messagingSenderId: "854463026187",
  appId: "1:854463026187:web:42ebdab554ec29a739a30e",
  measurementId: "G-SVJ6DGQGJX"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
