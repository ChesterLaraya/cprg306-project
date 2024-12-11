import { getAuth, GithubAuthProvider } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBG3yEB-YmG9E0tVd_sSSiCGS4kcPlmnXM",
    authDomain: "sole-4aaba.firebaseapp.com",
    projectId: "sole-4aaba",
    storageBucket: "sole-4aaba.appspot.com",
    messagingSenderId: "976429783535",
    appId: "1:976429783535:web:adbc7f961c57393934fe1a",
    measurementId: "G-4J4JV7MPZW"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Authentication
const githubProvider = new GithubAuthProvider(); // GitHub Login Provider

export { auth, githubProvider }