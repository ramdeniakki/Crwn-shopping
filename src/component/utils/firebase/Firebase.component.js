
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {  
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

import {doc,getDoc,getFirestore,setDoc} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYxTV3xghAD7PdZEhjM3Kv0aDWzIAjJzQ",
  authDomain: "crwn-shopping-app-d581c.firebaseapp.com",
  projectId: "crwn-shopping-app-d581c",
  storageBucket: "crwn-shopping-app-d581c.appspot.com",
  messagingSenderId: "274922653738",
  appId: "1:274922653738:web:e1c82f181cb8161ad1db53"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()



provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglepopup = () => signInWithPopup(auth,provider)

export const db = getFirestore();

export const createUserDocumentfromAuth = async (Userauth) =>{
    const userDocRef = doc(db,'users', Userauth.uid)
console.log(userDocRef)
const usersnapshot = await getDoc(userDocRef)
console.log(usersnapshot)
console.log(usersnapshot.exists())

if(! usersnapshot.exists()){
    const {displayName,email} = Userauth;
    const createdat = new Date();

    try {
        await setDoc(userDocRef,{
            displayName,
            email,
            createdat,
        })
    } catch (error) {
        console.log('created error message the user', error.message);
    }
}

 return userDocRef;

}

