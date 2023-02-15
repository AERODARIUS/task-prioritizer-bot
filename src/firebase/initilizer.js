// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const initializer = () => {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDsmP-yU_3TIaaLLaBGTHVANxXwcI-wx70",
    authDomain: "task-prioritizer-bot.firebaseapp.com",
    projectId: "task-prioritizer-bot",
    storageBucket: "task-prioritizer-bot.appspot.com",
    messagingSenderId: "675944871095",
    appId: "1:675944871095:web:3b07a73302f0f24e0c4932",
    measurementId: "G-M4H8W8PJGM",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return { app, analytics };
};

export default initializer;
