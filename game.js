const buttonColours = ["red", "blue", "green", "yellow"];

const gamePattern = [];

var userClickedPattern = [];


$(".btn").on('click',function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern)

  let playSound = function(name){
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }
  playSound(userChosenColour)

  function animatePress(currentColour){
    $('#' + currentColour).addClass('pressed')
  
  setTimeout(function(){
    $('#' + currentColour).removeClass('pressed')}, 100)}

  animatePress(userChosenColour)


  
});

function nextSequence() {

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}





console.log(userClickedPattern)