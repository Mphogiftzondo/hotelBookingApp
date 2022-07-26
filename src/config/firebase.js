 import {useState,useEffect} from 'react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth ,onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSBjiZROruhbt9mkKF3U3V5J1bFn7r8cY",
  authDomain: "hotelbookingapp-563e6.firebaseapp.com",
  projectId: "hotelbookingapp-563e6",
  storageBucket: "hotelbookingapp-563e6.appspot.com",
  messagingSenderId: "884735327359",
  appId: "1:884735327359:web:0fc74de4cda882bb49134a",
  measurementId: "G-BKXLK49ZEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const storage = getStorage();
export {auth,db, storage} ;

//custom hook
export function useAuth(){
  const [currentUser, setCurrentUser] = useState();
  useEffect(()=>{
   const unsub= onAuthStateChanged(auth,user=>setCurrentUser(user));
   return unsub;
  },[])
  return currentUser;
}

//logout
export function logout(){
  signOut(auth);
}

// Storage
export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage,'profilePhotos' + currentUser.uid + '.png');

  setLoading(true);
  
  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, {photoURL});
  
  setLoading(false);
  alert("Uploaded file!");
}