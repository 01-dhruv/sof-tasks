import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqDRzMlkdwrDjTNj9a0z69TiI8yHcdAQo",
  authDomain: "uploadmedia-24cb5.firebaseapp.com",
  projectId: "uploadmedia-24cb5",
  storageBucket: "uploadmedia-24cb5.appspot.com",
  messagingSenderId: "320542351152",
  appId: "1:320542351152:web:cd2827e57ee96eb1aef2f5",
  measurementId: "G-RP8BXPWBJV"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };