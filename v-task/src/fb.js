import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBWKKDzkWQ5fLZAcPxX9YL9BET8hxqiYco",
    authDomain: "web-avimehenwal-in.firebaseapp.com",
    databaseURL: "https://web-avimehenwal-in.firebaseio.com",
    projectId: "web-avimehenwal-in",
    storageBucket: "web-avimehenwal-in.appspot.com",
    messagingSenderId: "7741353385",
    appId: "1:7741353385:web:622674ecdd2c3f07"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

//export to make it available to other files
export default db;