import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCDvFfytd0bG1e8AwnL5d10RYRoLMN62Wg",
  authDomain: "chat01-9a499.firebaseapp.com",
  databaseURL: "https://chat01-9a499.firebaseio.com",
  projectId: "chat01-9a499",
  storageBucket: "chat01-9a499.appspot.com",
  messagingSenderId: "437088257498",
  appId: "1:437088257498:web:d7065be58eff331289ace3",
  measurementId: "G-K77NY4QD14"
};

firebase.initializeApp(config);

const database = firebase.database();

export {
  database,
};