// For playing or pausing song

var play = document.getElementById("play-circle");
var pause = document.getElementById("pause");
var audio = document.getElementById("music-playing");
var playClass = document.getElementsByClassName("fas")[0];
play.addEventListener("click", function () {
  console.log("play");
  audio.play();
  play.style.display = "none";
  pause.style.display = "block";
});
pause.addEventListener("click", function () {
  console.log("pause");
  audio.pause();
  play.style.display = "block";
  pause.style.display = "none";
});