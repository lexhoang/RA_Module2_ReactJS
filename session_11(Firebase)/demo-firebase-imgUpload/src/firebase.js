// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2GiMDWQqZ6yoEQcPe-Lx81bahznVnluo",
    authDomain: "fir-upload-image-3ae5c.firebaseapp.com",
    projectId: "fir-upload-image-3ae5c",
    storageBucket: "fir-upload-image-3ae5c.appspot.com",
    messagingSenderId: "743615592581",
    appId: "1:743615592581:web:cc0834bd6e6806a405d1ec",
    measurementId: "G-0Y4543M6TS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);