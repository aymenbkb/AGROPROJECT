// firebaseConfig.js
import { initializeApp } from "./firebase-app.js";
import { getAnalytics } from "./firebase-analytics.js";
import { getAuth } from "./firebase-auth.js";
import { getStorage } from "./firebase-storage.js";
import { getDatabase } from "./firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBj8molb1_4DDGhwQyfdKeR4HH7jJjPWjM",
    authDomain: "prosemagro.firebaseapp.com",
    databaseURL: "https://prosemagro-default-rtdb.firebaseio.com",
    projectId: "prosemagro",
    storageBucket: "prosemagro.appspot.com",
    messagingSenderId: "210148411864",
    appId: "1:210148411864:web:898f06e0863ad28e1d0aad",
    measurementId: "G-050MB87EC4"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const storage = getStorage(app);
const database = getDatabase(app);

export { auth, storage, database };
