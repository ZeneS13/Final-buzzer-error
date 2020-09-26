import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCKRtO8lfUKTfblgsrBKiGUhVmWlwOwkbc",
  authDomain: "wireless-buzzer-app-3bc7c.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-app-3bc7c.firebaseio.com",
  projectId: "wireless-buzzer-app-3bc7c",
  storageBucket: "wireless-buzzer-app-3bc7c.appspot.com",
  messagingSenderId: "119727322727",
  appId: "1:119727322727:web:eefe8a1de72adaf19d86c2"
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()