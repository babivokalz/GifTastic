$('button').on('click', function() {
    var dog = $(this).attr('data-dog');
    var queryURL =
          "https://api.giphy.com/v1/gifs/search?q=" +
          dog +
          "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    $.ajax({url: queryURL, method: 'GET'}).then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var gifDiv = 
        }
    })
}