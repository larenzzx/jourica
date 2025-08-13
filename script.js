const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".buttons-container");

function moveNoButton() {
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  // Calculate safe boundaries within the container
  const maxMovement = 60;

  // Generate random position within bounds
  const randomX = (Math.random() - 0.5) * maxMovement;
  const randomY = (Math.random() - 0.5) * maxMovement;

  // Apply transform
  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;

  // Add a little shake effect
  setTimeout(() => {
    noBtn.style.transform += " scale(0.95)";
    setTimeout(() => {
      noBtn.style.transform = noBtn.style.transform.replace(" scale(0.95)", "");
    }, 100);
  }, 50);
}

// Move button on hover and touch
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// Move button on click attempt
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});

function createConfetti() {
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    confetti.style.animation = `fall ${confetti.style.animationDuration} linear forwards`;

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 6000);
  }
}

function showSuccess() {
  createConfetti();
  document.getElementById("successOverlay").style.display = "flex";

  // Add celebration effects
  document.body.style.animation = "celebrate 0.6s ease-in-out";
  setTimeout(() => {
    document.body.style.animation = "";
  }, 600);
}

// Add fall animation for confetti
const style = document.createElement("style");
style.textContent = `
            @keyframes fall {
                0% {
                    transform: translateY(-20px) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
            
            @keyframes celebrate {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.02); }
            }
        `;
document.head.appendChild(style);

// Close overlay when clicking outside
document.getElementById("successOverlay").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    e.currentTarget.style.display = "none";
  }
});
