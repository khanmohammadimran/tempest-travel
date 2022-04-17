// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzptDzu2akyr_JgHteQEk2yUA_GG8FQhs",
    authDomain: "tempest-travel.firebaseapp.com",
    projectId: "tempest-travel",
    storageBucket: "tempest-travel.appspot.com",
    messagingSenderId: "673984084746",
    appId: "1:673984084746:web:93059b64f8876c6a3558f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;