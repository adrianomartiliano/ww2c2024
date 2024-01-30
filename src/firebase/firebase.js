import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCVqxxn_hXqaT0uMmqripVYQ_iTCMhPAZk",
    authDomain: "wwc2-fb659.firebaseapp.com",
    projectId: "wwc2-fb659",
    storageBucket: "wwc2-fb659.appspot.com",
    messagingSenderId: "61124866094",
    appId: "1:61124866094:web:23d97140cb0ec621262fbf",
    measurementId: "G-9K03WJLNKD"
};

firebase.initializeApp(firebaseConfig);

export default firebase;