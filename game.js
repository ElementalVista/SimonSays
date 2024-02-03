const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let started = false

let level = 0

$(document).on('keypress',function(){
  if(!started){
    $('#level-title').text('level ' + level)
    nextSequence()
    started = true
  }
})


$(".btn").on('click',function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

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

  function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
      console.log('success')

      if(userClickedPattern.length === gamePattern.length){
        setTimeout(function() {
          nextSequence()
        }, 1000)
      }
    } else{
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
  }


  checkAnswer(userClickedPattern.length-1)

});





function nextSequence() {

  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);


  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}




function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
