
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6Irh0Xs_Jrt_6IOUM2mz6vxZm3q52HoY",
  authDomain: "laundry-application-7f4c7.firebaseapp.com",
  projectId: "laundry-application-7f4c7",
  storageBucket: "laundry-application-7f4c7.appspot.com",
  messagingSenderId: "571088013444",
  appId: "1:571088013444:web:6a5e8ded1f44846994dad1"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDMDNW4gPkcSYIkWJKsgxWWd7mWIi34vfI",
//   authDomain: "otpauth-a08ac.firebaseapp.com",
//   projectId: "otpauth-a08ac",
//   storageBucket: "otpauth-a08ac.appspot.com",
//   messagingSenderId: "610440294955",
//   appId: "1:610440294955:web:4b57d8115fc5835e65306e",
//   measurementId: "G-D5W4942BMM"

// };


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};