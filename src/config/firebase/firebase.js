import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyDj6ZbPFWIQlVimq37FmO_mI6-GiovSQZs",
  authDomain: "esale-fmd.firebaseapp.com",
  databaseURL: "https://esale-fmd.firebaseio.com",
  projectId: "esale-fmd",
  storageBucket: "esale-fmd.appspot.com",
  messagingSenderId: "505056774229",
  appId: "1:505056774229:web:bc19d4ca12cc0eaf11ecdc",
  measurementId: "G-JGVBC2BZNT"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);