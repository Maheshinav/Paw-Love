
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB1f8WP-2PBQmkai8rZDGU5Hq6sWBPhD_w",
  authDomain: "pawlove-5c2d2.firebaseapp.com",
  projectId: "pawlove-5c2d2",
  storageBucket: "pawlove-5c2d2.appspot.com",
  messagingSenderId: "1013839249310",
  appId: "1:1013839249310:web:cd401ce1bb1b47a1af208f"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
