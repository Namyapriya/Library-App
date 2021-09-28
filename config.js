import firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAoV26Bm3L7OSxN2q3tC0xU1-q5lR_Y2gI",
  authDomain: "wily-9e00c.firebaseapp.com",
  projectId: "wily-9e00c",
  storageBucket: "wily-9e00c.appspot.com",
  messagingSenderId: "252301631218",
  appId: "1:252301631218:web:edaab81448cbad6ef83a6b"
};
  // Initialize Firebase
  if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

  export default firebase.firestore();

