import { initializeApp } from 'firebase/app'
// auth
import{ getAuth } from 'firebase/auth'
// storage bucket 
import { getStorage } from 'firebase/storage'
// firestore
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAdp6eWxuFY8U7OThP9HTnVPHxUpUEMgjQ",
  authDomain: "react-chat-app-24-a57fd.firebaseapp.com",
  databaseURL: "https://react-chat-app-24-a57fd-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-24-a57fd",
  storageBucket: "react-chat-app-24-a57fd.appspot.com",
  messagingSenderId: "542150751792",
  appId: "1:542150751792:web:ce1166a5c623b49cf79ff5",
  measurementId: "G-50HT1BPTCL"
}

// firebase instance
export const app = initializeApp(firebaseConfig)
// auth instance
export const auth = getAuth()
// storage 
export const store =  getStorage()
// firestore
export const db = getFirestore()