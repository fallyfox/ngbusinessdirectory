// import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "ngbusinessdirectory.firebaseapp.com",
    projectId: "ngbusinessdirectory",
    storageBucket: "ngbusinessdirectory.firebasestorage.app",
    messagingSenderId: "803482616392",
    appId: "1:803482616392:web:9eeb3deca57de7c93dce7d"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app)

export { db,storage }
