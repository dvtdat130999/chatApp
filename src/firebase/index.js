import firebase from 'firebase';

// Replace this with your Firebase SDK config snippet
const firebaseConfig = {
    apiKey: "AIzaSyDgR6C8UMbPgzpYiz2uwNMl_MwGL_wWZgw",
    authDomain: "chatapp-c6c54.firebaseapp.com",
    projectId: "chatapp-c6c54",
    storageBucket: "chatapp-c6c54.appspot.com",
    messagingSenderId: "796359679768",
    appId: "1:796359679768:web:ca051de27651fffaaa086d",
    measurementId: "G-VG8X4K2382"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };