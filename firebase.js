import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCcIKYnG0HEqWSWv85s8Ui_unPSPrmMXzY",
    authDomain: "final-project-waitlist.firebaseapp.com",
    projectId: "final-project-waitlist",
    storageBucket: "final-project-waitlist.appspot.com",
    messagingSenderId: "411478521921",
    appId: "1:411478521921:web:7561512a0e0501c0c8eec0",
    measurementId: "G-ZSXL4DXTKM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}