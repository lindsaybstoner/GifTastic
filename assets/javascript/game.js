
startButtons = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken", "capybara", "teacup pig", "salamander", "frog"]

//var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchInput + "&api-key=QJ6UNAIBuReGMsfde4Q9d32vfqDndwkb";
function createButtons() {
    for (var i = 0; i < startButtons.length; i++) {
        var makeButton = $("<button>");
            makeButton.attr("data-animal", startButtons[i])
            makeButton.text(startButtons[i])
            $("#buttons").append(makeButton);
            console.log("hello")
    }
};

createButtons();


$("button").on("click", function() {
    var animal = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=QJ6UNAIBuReGMsfde4Q9d32vfqDndwkb&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {

        console.log(response);

        var results = response.data;

        for (var i = 0; i < results.length; i++) {

           
        
          var gifDiv = $("<div>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var animalImage = $("<img>");
          animalImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(animalImage);

          $("#gifs-appear-here").prepend(gifDiv);
        }
      });
  });