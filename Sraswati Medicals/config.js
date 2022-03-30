import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDbKo9Cab8jp2uEKWbd-RUVK1FKOquY-D4",
  authDomain: "fuel-saving-new-new.firebaseapp.com",
  projectId: "fuel-saving-new-new",
  storageBucket: "fuel-saving-new-new.appspot.com",
  messagingSenderId: "1092993845160",
  appId: "1:1092993845160:web:396a57cd01112102c63f9d"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
