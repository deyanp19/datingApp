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



$(document).ready(function () {
    var coffeeArr = [
        "q=Coffee+Lab,Evanston+IL",
        "q=Backlot+Coffee,Evanston+IL",
        "q=Unicorn+Cafe,Evanston+IL",
        "q=Brothers+K+Coffeehouse,Evanston+IL",
        "q=Peet's+Coffee,Evanston+IL",
    ]; 

    var mapsIframe = "https://www.google.com/maps/embed/v1/place?key=AIzaSyDKcsgN-w_udSFRh-gzsY0CzArq7fMo-68&";
    
    // Gets the value of the current category for the date as a string
    $("#submit-btn").click(function () {
        currentSelection = $(".custom-select select").val();
        console.log(currentSelection);
     
        if (currentSelection === "coffee") {
            var randomCoffee = coffeeArr[Math.floor(coffeeArr.length * Math.random())];
            console.log('this is our random coffee selection!!', randomCoffee);
            newSrc = mapsIframe.concat(randomCoffee);
            $("#googlemap").attr("src", newSrc);

        };//end "coffee" if statement

    });//end submit button function

});

// for (i = 0; i < randomCoffee.length; i++) {
//     newSrc = mapsIframe.concat(randomCoffee[i]);
//     $("#googlemap").attr("src", newSrc);

//     for (k = 0; k = i - 1; k++) {
//         if (randomCoffee[i] == randomCoffee[k]) {
//             i--;
//             return;
//         }//end inner if statement to stop repeats 

//     }//end inner for-loop
//     return;
// }//end outer for-loop

