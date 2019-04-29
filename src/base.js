import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDPc0z2f6fE0MkEZvoCnjOsebiLp02JocY",
    authDomain: "chatbox-app-ac6ac.firebaseapp.com",
    databaseURL: "https://chatbox-app-ac6ac.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base