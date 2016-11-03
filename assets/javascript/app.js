//Initial array of my cartoon gifs
var cartoons = ['Grimm Adventures of Billy and Mandy','Peter Pan','Brave Disney', 'Shrek','Howls Moving Castle'];

//should display giphy
function displayGiphy(){
  console.log("yep, this is working");

  var gifs = $(this).attr('data-name');
  var gifsURL = "https://api.giphy.com/v1/gifs/search?q=" + gifs + "&api_key=dc6zaTOxFJmzC&limit=10";

  //will try and call up the AJAX for the specific cartoon requested:
  $.ajax({url: gifsURL, method: 'GET'}).done(function(response) {
    console.log(response);

    //JSON.stringify(response);
    var results = response.data;
    console.log("test line 17");

    for (var i = 0; i < results.length; i++) {
      console.log("for loop");
    //need to create a generic div to hold my cartoon giphies or newly added requested
    var cartoonsDiv = $('<div class="cartoons-Image">');
    console.log("I made here to 23");
    //since it was required for assignment, I need to request the rating data-name
    var rating = results[i].rating;
    var p = $('<p>').text("Rating: " + rating);
    //Now I need to create an element to have the rating element and images displayed:
    var cartoonsImage = $('<img>');
    cartoonsImage.attr('data-state', 'still');
    console.log("made it to line 30");

    cartoonsImage.attr('src', results[i].images.fixed_height_still.url);
    cartoonsImage.attr('data-still', results[i].images.fixed_height_still.url);
    cartoonsImage.attr('data-animate', results[i].images.fixed_height.url);

    cartoonsImage.addClass('images');

    cartoonsDiv.append(p)
    cartoonsDiv.append(cartoonsImage)
    //cartoonsDiv.append(pRating);

    //now I need to append the giphy:
    //cartoonsDiv.append(cartoons);
    console.log("I made it to 42");
    /* this next function request is suppose to place the entire collection of cartoons above the previously
    requested cartoons.*/
    $('#cartoonsView').prepend(cartoonsDiv);
  }
  });

}

//This next step is suppose to generate a generic function for displaying my cartoon data:
function addButtons() {
  console.log("this is working too.")
  //this is suppose to delete the cartoon giphies prior to adding new ones (this is necessary or I will have repeat buttons)
  $('#buttonsView').empty();

  //this next step is needed to loop through the array of cartoon giphies:
  for (var i = 0; i < cartoons.length; i++) {

    /*it would be AWESOME if my dynamically generated buttons worked for each giphy in the array.  Just because I
    understand what I'm coding doesn't necessarily mean it works out for me*/

    //please note I am once again trying out my hand at jQuery and I hope and pray it works:
    var a = $('<button>')//supposedly, this is all that need to create the beginning and end tag of <button>
      a.addClass('cartoons'); //this will add a class
      a.attr('data-name', cartoons[i]);//this is suppose to add the data attribute
      a.text(cartoons[i]);//this is suppose to add text to my initally created button text
      $('#buttonsView').append(a); //this is suppose to add buttons to my html
  }

  return false;
}

//this next function handles the on click event where the button is clicked:
$('#addCartoons').on('click', function() {
  //this next line of code is suppose to grab the info from the text box
  var cartoon = $('#cartoons-input').val().trim();
  //this next step is suppose to take request from the textbox and add it to my array:
  cartoons.push(cartoon);
  addButtons();
  console.log(addButtons);
  //this line of coding is suppose to process that in case the user does not press the button, "enter" will work as well.

  return false;
});

//this generic function is used for displaying the giphyinfo
$(document).on('click', '.cartoons', displayGiphy);

//lastly... this last code calls the addButtons to function:
addButtons();
console.log("made it to 94")
//trying to establish the click function so that it would make the gif static and animated.
$(document).on('click', '.images', function() {
  var state = $(this).attr('data-state');
  var animatedImgUrl = $(this).attr('data-animate');
  var stillImgUrl = $(this).attr('data-still');

  console.log(state);
  if (state === 'still') {
    $(this).attr('src', animatedImgUrl);
    $(this).attr('data-state', 'animate');
    console.log("made it 104");
  }
  else if (state === 'animate') {
    $(this).attr('src', stillImgUrl);
    $(this).attr('data-state', 'still' );
    console.log("made it to 109");
  }
});
