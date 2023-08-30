// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyvq0uhXpp9udFu09nLNnxmb5RRCkfSdE",
    authDomain: "jetflix-707ea.firebaseapp.com",
    projectId: "jetflix-707ea",
    storageBucket: "jetflix-707ea.appspot.com",
    messagingSenderId: "77161446982",
    appId: "1:77161446982:web:d84fe68976f0eb4e4b9447",
    measurementId: "G-R65PBVYJQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);