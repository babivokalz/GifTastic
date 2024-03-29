function createButton(buttonLabel) {
  //   $("#buttons").empty();
  var newButton = $("<button>");
  newButton.text(buttonLabel);
  newButton.on("click", function() {
    populateGifs(buttonLabel);
  });
  $("#buttons").append(newButton);
}
$("#buttons button").on("click", function() {
  var dog = $(this).attr("data-dog");
  populateGifs(dog);
});

function populateGifs(dog) {
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    dog +
    "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
  $.ajax({ url: queryURL, method: "GET" }).then(function(response) {
    var results = response.data;

    for (var i = 0; i < results.length; i++) {
      var gifDiv = $("<div>");
      var rating = results[i].rating;
      var p = $("<p>").text("Rating: " + rating);
      var dogImage = $("<img>");

      dogImage.attr("src", results[i].images.fixed_height.url);
      dogImage.attr("data-state", "animate");
      dogImage.attr(
        "data-state-still",
        results[i].images.fixed_height_still.url
      );
      dogImage.attr("data-state-animate", results[i].images.fixed_height.url);
      dogImage.on("click", function() {
        var thisDogImage = $(this);
        const attribute = thisDogImage.attr("data-state");
        if (attribute === "animate") {
          thisDogImage.attr("src", thisDogImage.attr("data-state-still"));
          thisDogImage.attr("data-state", "still");
        } else {
          thisDogImage.attr("src", thisDogImage.attr("data-state-animate"));
          thisDogImage.attr("data-state", "animate");
        }
      });

      gifDiv.prepend(p);
      gifDiv.prepend(dogImage);

      $("#gifs-go-here").prepend(gifDiv);
    }
  });
}
$("#search-button").on("click", function() {
  const buttonLabel = $("#search-input")
    .val()
    .trim();
  $("#search-input").val("");
  createButton(buttonLabel);
});
