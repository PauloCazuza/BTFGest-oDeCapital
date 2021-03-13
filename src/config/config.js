import firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyBOHVRM1kXinIj5wk4vLiwSueJJXG3nTac",
    authDomain: "projeto-investir.firebaseapp.com",
    projectId: "projeto-investir",
    storageBucket: "projeto-investir.appspot.com",
    messagingSenderId: "365492129045",
    appId: "1:365492129045:web:fafe765dab73ebee3d2d1c",
    measurementId: "G-5F17XEY1MB"
};

export default firebase.initializeApp(firebaseConfig);