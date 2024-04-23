// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCir9WYDu47M280EkXV6-VDosrnpOQxP8U",
	authDomain: "sommarskoj-de03c.firebaseapp.com",
	projectId: "sommarskoj-de03c",
	storageBucket: "sommarskoj-de03c.appspot.com",
	messagingSenderId: "356646941386",
	appId: "1:356646941386:web:4720c45c7c06a84c993a33",
	measurementId: "G-1N41KKG1M8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }
