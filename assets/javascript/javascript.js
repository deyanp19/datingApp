
/*   API example with longitude latitude search */

/* https://api.foursquare.com/v2/venues/explore?client_id=E25VOFWZGUJNVIDM5O5UR2WINJNWF0CAKHVWRW1VP1TCMLV4&client_secret=QL0A3ZJS3WVJZ5NGZLTTNKNVG2FWE0T2SFSPYOCHUNT01TJB&ll=40.7243,-74.0018&v=20180323 */


// url for a sample query

/* https://api.foursquare.com/v2/venues/explore/?near=Chicago,IL&venuePhotos=1&limit=20&section=trendingtime=any&client_id=E25VOFWZGUJNVIDM5O5UR2WINJNWF0CAKHVWRW1VP1TCMLV4&client_secret=QL0A3ZJS3WVJZ5NGZLTTNKNVG2FWE0T2SFSPYOCHUNT01TJB&&v=20131124 */

// url for the photos key in object

/* https://api.foursquare.com/v2/venues/4b5c8b75f964a520ab3529e3/photos?client_id=E25VOFWZGUJNVIDM5O5UR2WINJNWF0CAKHVWRW1VP1TCMLV4&client_secret=QL0A3ZJS3WVJZ5NGZLTTNKNVG2FWE0T2SFSPYOCHUNT01TJB&v=20180505 */

// string url example for the actual image


$(document).ready(function () {

    /* https://igx.4sqi.net/img/user/100x100/QYGHTN2KNPTTUIEF.jpg */

    var client_id = "client_id=E25VOFWZGUJNVIDM5O5UR2WINJNWF0CAKHVWRW1VP1TCMLV4&";
    var client_key = "client_secret=QL0A3ZJS3WVJZ5NGZLTTNKNVG2FWE0T2SFSPYOCHUNT01TJB&";
    var currentSelection;

    // Gets the value of the current category for the date as a string
    $("#submit-btn").click(function (e) {

        currentSelection = $(".custom-select select").val();
        console.log(currentSelection);

        // Create the query string for the GET method to retrieve our json object
        var queryURL = "https://api.foursquare.com/v2/venues/explore/?near=Chicago,IL&venuePhotos=1&limit=20&section=" + currentSelection + "&time=any&" + client_id + client_key + "v=20131124"
        console.log(queryURL);


        var photosURL;
        var photoImg;
        // Empty array to push our random date list to
        var dateList = [];

        // A single item from our response to push to dateList
        var dateItem;

        // Pick one of the dateItems from dateList and assign it to this variable
        var pickRandomDate;

        // Pick a random index to get the random date object from pickRandomDate
        var randomInt = Math.floor(Math.random() * (20 - 0) + 0);

        // Will need a venue Id from foursquare to get photo of the venue
        var venueID;


        




        // Create a function for the first api call to retrieve a specific venue ID
        function getVenueId() {
            // Make a call to get the venue recommendation information
            $.ajax({
                url: queryURL,
                method: "GET",
            }).then(function (data) {
                
                // get the items from the submission results
                dateItem = data.response.groups[0].items;

                // push each dateItem out of 20 (limit = 20 in queryURL) to push to the dateList
                for (var i = 0; i < dateItem.length; i++) {
                    dateList.push(dateItem[i]);
                }

                // This will pick one single dateItem to get our information from
                pickRandomDate = dateList[randomInt];

                // Retrieve the venue ID (will need for photos and other API endpoints) and assign to variable
                venueID = pickRandomDate.venue.id;

                photosURL = "https://api.foursquare.com/v2/venues/" + venueID + "/photos?" + client_id + client_key + "v=20131124";

                console.log(data);
                console.log(dateList); // array list of possible choices
                console.log(randomInt); // integer to pick the random object
                console.log(pickRandomDate); // pick the venue
                console.log(venueID); // get the venue id --> necessary for ajax call for photo
                console.log(photosURL); // use venue id to get the photosURL for ajax call

                var venueName = pickRandomDate.venue.name;

                var filterVenueName = venueName.replace(/&/g, "and");
                // Assign the value of our the user's selection in the dropdown to a variable
                
                var mapsIframe = "https://www.google.com/maps/embed/v1/place?key=AIzaSyDKcsgN-w_udSFRh-gzsY0CzArq7fMo-68&q=";

                newSrc = mapsIframe.concat(filterVenueName);
                $("#googlemap").attr("src", newSrc);


                // Nest a second ajax call to get the photo to render
                function getPhoto() {
                    $.ajax({
                        url: photosURL,
                        method: "GET",
                    }).then(function (photoData) {

                        var photo = photoData.response.photos.items[0];
                        console.log(photo);

                        photoImg = photo.prefix + "300x300" + photo.suffix;
                        console.log(photoImg);

                        // append the photo to the foursquare div
                        $("#foursquare").html("<img src=" + photoImg + ">");
                    });

                }

                getPhoto();
            });

        }


        
        
        
        getVenueId();

        e.preventDefault();
    });

});


/* Things to do

Make a table with all the information about the date idea or venue. Possible categories can include name of venue, rating, prices, hours. */

// pickRandomDate.

