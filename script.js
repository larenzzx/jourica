// Existing code
const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".buttons-container");
const confirmationModal = document.getElementById("confirmationModal");
const errorModal = document.getElementById("errorModal");
const successOverlay = document.getElementById("successOverlay");

// Romantic Enhancement Features
const loveMessages = [
  "You mean the world to me 💕",
  "Forever and always 💖",
  "You're my sunshine ☀️",
  "My heart belongs to you 💝",
  "You complete me ✨",
  "Together we're magic 🌟",
  "You're my dream come true 💫",
];

let messageIndex = 0;

// Floating Hearts
function createFloatingHearts() {
  const heartsContainer = document.getElementById("floatingHearts");

  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerHTML = ["💕", "💖", "💝", "💗", "💓"][
      Math.floor(Math.random() * 5)
    ];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDelay = Math.random() * 12 + "s";
    heart.style.animationDuration = Math.random() * 8 + 8 + "s";
    heartsContainer.appendChild(heart);
  }
}

// Sparkling Stars
function createSparkles() {
  for (let i = 0; i < 50; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.animationDelay = Math.random() * 4 + "s";
    document.body.appendChild(sparkle);
  }
}

// Rose Petals
function createRosePetals() {
  setInterval(() => {
    const petal = document.createElement("div");
    petal.className = "rose-petal";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = Math.random() * 10 + 10 + "s";
    document.body.appendChild(petal);

    setTimeout(() => petal.remove(), 25000);
  }, 2000);
}

// Love Messages Rotation
function rotateLoveMessages() {
  const messageElement = document.getElementById("loveMessage");
  setInterval(() => {
    messageIndex = (messageIndex + 1) % loveMessages.length;
    messageElement.textContent = loveMessages[messageIndex];
  }, 8000);
}

// Cursor Hearts Effect
function createCursorHeart(e) {
  const heart = document.createElement("div");
  heart.className = "cursor-heart";
  heart.innerHTML = "💕";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 2000);
}

// Initialize romantic features
window.addEventListener("load", () => {
  createFloatingHearts();
  createSparkles();
  createRosePetals();
  rotateLoveMessages();
});

// Add cursor hearts on click
document.addEventListener("click", createCursorHeart);

// Existing functionality
function moveNoButton() {
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxMovement = 60;
  const randomX = (Math.random() - 0.5) * maxMovement;
  const randomY = (Math.random() - 0.5) * maxMovement;

  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;

  setTimeout(() => {
    noBtn.style.transform += " scale(0.95)";
    setTimeout(() => {
      noBtn.style.transform = noBtn.style.transform.replace(" scale(0.95)", "");
    }, 100);
  }, 50);
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
  setTimeout(() => {
    confirmationModal.style.display = "flex";
  }, 300);
});

function closeConfirmationModal() {
  confirmationModal.style.display = "none";
}

function showError() {
  confirmationModal.style.display = "none";
  setTimeout(() => {
    errorModal.style.display = "flex";
  }, 200);
}

function closeErrorModal() {
  errorModal.style.display = "none";
}

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
  successOverlay.style.display = "flex";

  document.body.style.animation = "celebrate 0.6s ease-in-out";
  setTimeout(() => {
    document.body.style.animation = "";
  }, 600);
}

confirmationModal.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    closeConfirmationModal();
  }
});

errorModal.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    closeErrorModal();
  }
});

successOverlay.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    e.currentTarget.style.display = "none";
  }
});
