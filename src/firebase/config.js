import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCz2TGUW3iYVCw0rtGlg4SNCwLejs0Zt4A",
    authDomain: "reading-list-web.firebaseapp.com",
    projectId: "reading-list-web",
    storageBucket: "reading-list-web.appspot.com",
    messagingSenderId: "899415258422",
    appId: "1:899415258422:web:66d8696ad41930e315af97"
  };

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

export { db }
