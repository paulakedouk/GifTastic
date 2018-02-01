// Event listener for all buttons on the page
// $(document).ready(function() {
$('button').on('click', function() {
  var emotion = $(this).attr('data-emotion');

  // URL to search Giphy and use my key
  var queryURL =
    'https://api.giphy.com/v1/gifs/search?q=' + emotion + '&api_key=tnLJTJdQDz9IyKxbezLt8rkUHZ02Ta0slimit=10';

  // AJAX call
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    // Store an array of results in the results variable
    var results = response.data;
    //   console.log(results);

    for (var i = 0; i < results.length; i++) {
      var emotionDiv = $('<div class="item">');
      // Storing the result item's rating
      var rating = results[i].rating;
      var p = $('<p>').text('Rating: ' + rating);

      var emotionImage = $('<img>');
      emotionImage.attr('src', results[i].images.fixed_height.url);
      // emotionImage.attr('data-still', results[i].images.fixed_height_still.url);
      // emotionImage.attr('data-animate', results[i].images.fixed_height.url);

      emotionDiv.append(p);
      emotionDiv.append(emotionImage);
      emotionDiv.prepend('#gif-session');
      console.log(emotionDiv);
    }
  });
});
// });
