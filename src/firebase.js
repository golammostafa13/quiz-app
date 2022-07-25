import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
// firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY || 'mock_key',
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,

};

var app="";
if (!firebase.apps.length){
	app = initializeApp(firebaseConfig);
}

export default app;
