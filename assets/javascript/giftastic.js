function createButton() {
  $("#buttons").empty();
  var newButton = $("<button>");
  newButton.attr("type", "button");
  newButton.attr("class", "button-print btn btn-2 btn-2h");
  newButton.attr("id");
  $("#buttons").append(newButton);
}
$("button").on("click", function() {
  var dog = $(this).attr("data-dog");
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
      dogImage.attr("url_movie", results[i].images.fixed_height.url);
      dogImage.attr("url_still", results[i].images.fixed_height.url);

      gifDiv.prepend(p);
      gifDiv.prepend(dogImage);

      $("#gifs-go-here").prepend(gifDiv);
    }
  });
});
$(document).on("click", ".gifinfo", function() {
  if ($(this).attr("src") == $(this).attr("url_still")) {
    $(this).attr("src", $(this).attr("url_movie"));
  } else {
    $(this).attr("src", $(this).attr("url_still"));
  }
});
