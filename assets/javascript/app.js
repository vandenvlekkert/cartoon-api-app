//Initial array of my cartoon gifs
var cartoons = ['Grimm Adventures of Billy and Mandy','Peter Pan','Brave Disney', 'Shrek','Howls Moving Castle'];

//should display giphy info
function displayGiphyInfo(){
  console.log("yep, this is working");
  var cartoons = $(this).attr('data-name');
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + cartoons + "&api_key=dc6zaTOxFJmzC&limit=10";
  console.log(queryURL)
  //will try and call up the AJAX for the specific cartoon requested:
  $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
    console.log(response);
    JSON.stringify(response);
    for (var i = 0; i < results.length; i++) {
    //need to create a generic div to hold my cartoon giphies or newly added requested
    var cartoonDiv = $('<div class="cartoon">');

    //since it was required for assignment, I need to request the rating data-name
    var rating = results[i].rating;
    //Now I need to create an element to have the rating element and images displayed:
    var pRating = $('<p>').text( "Rating: " + rating);

    var cartoonImage = $('<img>');
    cartoonImage.attr('src', results[i].images.fixed_height.url);
    cartoonDiv.append(p)
    cartoonDiv.append(cartoonImage)
    cartoonDiv.append(pRating);

    //now I need to append the giphy:
    cartoonDiv.append(giphy);

    /* this next function request is suppose to place the entire cartoons above the previously
    requested cartoons.*/
    $('#cartoonView').prepend(cartoonDiv);
  });

}

//This next step is suppose to generate a generic function for displaying my cartoon data:
function renderButtons() {

  //this is suppose to delete the cartoon giphies prior to adding new ones (this is necessary or I will have repeat buttons)
  $('#buttonsView').empty();

  //this next step is needed to loop through the array of cartoon giphies:
  for (var i = 0; i < cartoon.length; i++) {

    /*it would be AWESOME if my dynamically generated buttons worked for each giphy in the array.  Just because I
    understand what I'm coding doesn't necessarily mean it works out for me*/

    //please note I am once again trying out my hand at jQuery and I hope and pray it works:
    var a = $('<button>')//supposedly, this is all that need to create the beginning and end tag of <button>
      a.addClass('cartoon'); //this will add a class
      a.attr('data-name', cartoon[i]);//this is suppose to add the data attribute
      a.text(cartoon[i]);//this is suppose to add text to my initally created button text
      $('#buttonsView').append(a); //this is suppose to add buttons to my html
  }
}

//this next function handles the on click event where the button is clicked:
$('#addCartoon').on('click', function() {
  //this next line of code is suppose to grab the info from the text box
  var cartoon = $('#cartoon-input').val().trim();
  //this next step is suppose to take request from the textbox and add it to my array:
  cartoon.push(cartoon);

  //this line of coding is suppose to process that in case the user does not press the button, "enter" will work as well.
  return false;
})

//this generic function is used for displaying the giphyinfo
$(document).on('click', '.cartoon', displayGiphyInfo);

//lastly... this last code calls the renderButtons to function:
renderButtons();
