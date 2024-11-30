// import { initializeApp,getApp,getApps } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_KEY,
//     authDomain: "ngbusinessdirectory.firebaseapp.com",
//     projectId: "ngbusinessdirectory",
//     storageBucket: "ngbusinessdirectory.firebasestorage.app",
//     messagingSenderId: "803482616392",
//     appId: "1:803482616392:web:9eeb3deca57de7c93dce7d"
// };

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const db = getFirestore(app);
// const storage = getStorage(app)

// export { db,storage }

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcbpYjqyVyRMpPguPkwTbaS5fxA6zsBl4",
  authDomain: "ngbusinessdirectory1.firebaseapp.com",
  projectId: "ngbusinessdirectory1",
  storageBucket: "ngbusinessdirectory1.firebasestorage.app",
  messagingSenderId: "122322496868",
  appId: "1:122322496868:web:9194e8f30f8c54eb635e71"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app)

export { db,storage }