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

/*   API example with longitude latitude search */

/* https://api.foursquare.com/v2/venues/explore?client_id=E25VOFWZGUJNVIDM5O5UR2WINJNWF0CAKHVWRW1VP1TCMLV4&client_secret=QL0A3ZJS3WVJZ5NGZLTTNKNVG2FWE0T2SFSPYOCHUNT01TJB&ll=40.7243,-74.0018&v=20180323 */

var client_id = "client_id=E25VOFWZGUJNVIDM5O5UR2WINJNWF0CAKHVWRW1VP1TCMLV4&";
var client_key = "client_secret=QL0A3ZJS3WVJZ5NGZLTTNKNVG2FWE0T2SFSPYOCHUNT01TJB&";
var currentSelection;




$(document).ready(function(){

    // Gets the value of the current category for the date as a string
    $("#submit-btn").click(function(){
        currentSelection = $(".custom-select select").val();
        console.log(currentSelection);
    });
});
