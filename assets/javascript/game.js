
startButtons = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken", "capybara", "teacup pig", "salamander", "frog"]

function createButtons() {
    for (var i = 0; i < startButtons.length; i++) {
        var makeButton = $("<button>");
        makeButton.attr("data-animal", startButtons[i])
        makeButton.text(startButtons[i])
        $("#buttons").append(makeButton);
    }
    makeGif();

};

createButtons();

function createSubmits() {
    var makeInput = $("<input>");
    makeInput.addClass("form-control");
    makeInput.attr("type", "text");
    makeInput.attr("id", "searchInput");
    $("#submitInfo").append(makeInput);

    var makeSubmit = $("<button>");
    makeSubmit.text("Submit");
    makeSubmit.attr("type", "submit");
    makeSubmit.attr("id", "submitButton");
    makeSubmit.addClass("btn btn-default");
    $("#submitInfo").append(makeSubmit);

}

createSubmits();


$("#submitButton").on("click", function () {


    event.preventDefault();

    var submitButtonText = $("#searchInput").val();
    if (!(submitButtonText === "")) {
        $("#buttons").empty();
        startButtons.push(submitButtonText);
        console.log(startButtons);
        createButtons();
    }



})

function makeGif() {

    $("#buttons > button").on("click", function () {

        event.preventDefault();

        var animal = $(this).attr("data-animal");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            animal + "&api_key=QJ6UNAIBuReGMsfde4Q9d32vfqDndwkb&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {

                console.log(response);

                var results = response.data;

                //var searchInput = $("#search").val().trim();
                //$("#search").text(searchInput);

                for (var i = 0; i < results.length; i++) {

                    var gifDiv = $("<div>");

                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    var animalImage = $("<img>");
                    animalImage.attr("src", results[i].images.fixed_height_still.url);

                    gifDiv.prepend(p);
                    gifDiv.prepend(animalImage);

                    $("#gifs-appear-here").prepend(gifDiv);
                }
            });
    });

};

//change the info in here for the on click of hte gifs to get them to move
$(document.body).on("click", ".checkbox", function () {

    // Get the number of the button from its data attribute and hold in a variable called  toDoNumber.
    var toDoNumber = $(this).attr("data-to-do");


});