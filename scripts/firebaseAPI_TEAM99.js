//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyCtZRAoohzrv6BueH49SfzUqzG3Rn3qTpk",
    authDomain: "comp1800-1c83d.firebaseapp.com",
    projectId: "comp1800-1c83d",
    storageBucket: "comp1800-1c83d.appspot.com",
    messagingSenderId: "200820304321",
    appId: "1:200820304321:web:11d30efc88d9814b742740"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
