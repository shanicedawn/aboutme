const audio = new Audio("./audio/summer-madness-jimmy-square.mp3");
const playButton = document.getElementById("play");
const stopButton = document.getElementById("stop");
const discRotation = document.querySelector(".wrapper-disc img");

playButton.addEventListener("click", () => {
    discRotation.style.animation = 'circle 60s infinite';
    audio.play();
});

stopButton.addEventListener("click", () => {
    discRotation.style.animation = 'none';
    audio.pause();
    audio.currentTime = 0;
});