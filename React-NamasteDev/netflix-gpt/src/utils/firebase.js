// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBvxHG8105kFH3W2XNA3XZMzfw8qyTXnf8",
	authDomain: "netflix-gpt-fad31.firebaseapp.com",
	projectId: "netflix-gpt-fad31",
	storageBucket: "netflix-gpt-fad31.appspot.com",
	messagingSenderId: "509550133271",
	appId: "1:509550133271:web:323a9ab736504325705c52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
