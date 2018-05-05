console.log("hello");

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAM4Op2cHGkCwqhOhsnGJ-S4IkTQD5w-3U",
    authDomain: "datingapp-f81f6.firebaseapp.com",
    databaseURL: "https://datingapp-f81f6.firebaseio.com",
    projectId: "datingapp-f81f6",
    storageBucket: "datingapp-f81f6.appspot.com",
    messagingSenderId: "863725689814"
  };
  firebase.initializeApp(config);

  var database = firebase.database().ref();