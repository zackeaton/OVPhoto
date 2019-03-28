import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
const firebaseapp = firebase.initializeApp(firebaseConfig)
export default firebaseapp.firestore()
