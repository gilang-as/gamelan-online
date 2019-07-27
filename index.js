window.addEventListener("keydown", function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const display = document.querySelector(".display");

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    display.classList.add("displayOn");

});

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
    display.classList.remove("displayOn");
}


const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
keys.forEach(key => key.addEventListener("click", playSound));

function playSound() {
    const dataKey = this.getAttribute("data-key");
    const display = document.getElementsByClassName("play-display");
    const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    this.classList.add("playing");
    display.classList.add("displayOn");
}

