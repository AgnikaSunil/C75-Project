import firebase from 'firebase';
require('@firebase/firestore');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD5R_XOK-pwuB0t9KPPfJ_Wgni-nURldMI",
    authDomain: "c71project.firebaseapp.com",
    databaseURL: "https://c71project.firebaseio.com",
    projectId: "c71project",
    storageBucket: "c71project.appspot.com",
    messagingSenderId: "1081651694920",
    appId: "1:1081651694920:web:bd182be85d73ae1abbb77d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
