import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA-F8-bV3Mv3PMZVBkJAXdVniLY3Ng2USA',
  authDomain: 'react-journalapp-b40ed.firebaseapp.com',
  projectId: 'react-journalapp-b40ed',
  storageBucket: 'react-journalapp-b40ed.appspot.com',
  messagingSenderId: '1011624897253',
  appId: '1:1011624897253:web:85c2c3a21ae6bc3f51820c'
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { db, googleAuthProvider, firebase }
