// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDXzOp7cyceue6LjqRMCW_LLpLUocI7jI",
    authDomain: "warehouse-management-sys-d4e13.firebaseapp.com",
    projectId: "warehouse-management-sys-d4e13",
    storageBucket: "warehouse-management-sys-d4e13.appspot.com",
    messagingSenderId: "713037514878",
    appId: "1:713037514878:web:a8e41f7481b8d098d9702f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;