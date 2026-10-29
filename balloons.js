const balloonContainer = document.createElement("div");
balloonContainer.className = "balloon-side";

for (let i = 0; i < 16; i++) {
    const balloon = document.createElement("span");
    balloon.textContent = ["🎈", "🎈", "🎈", "🎈", "🎈"][i % 5];
    balloon.style.left = (5 + Math.random() * 75) + "%";
    balloon.style.animationDelay = (Math.random() * 8) + "s";
    balloon.style.animationDuration = (7 + Math.random() * 5) + "s";
    balloonContainer.appendChild(balloon);
}

const leftBalloons = balloonContainer.cloneNode(true);
leftBalloons.classList.add("left");

balloonContainer.classList.add("right");

document.body.appendChild(leftBalloons);
document.body.appendChild(balloonContainer);
