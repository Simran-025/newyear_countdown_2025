// Set the date for the New Year (January 1, 2025, at 00:00:00)
const newYearDate = new Date("january 1, 2025 00:00:00").getTime();

// Function to update the countdown
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = newYearDate - now;

    // Calculate time units (days, hours, minutes, seconds)
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the countdown on the webpage
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the countdown reaches zero, display the celebration
    if (timeLeft <= 0) {
        document.getElementById("timer").style.display = "none"; // Hide the countdown
        document.getElementById("celebration").classList.remove("hidden"); // Show the celebration
        document.getElementById("party-popper").classList.add("pop"); // Trigger party popper effect
        
        // Trigger Confetti Explosion
        startConfetti();
        
        // Play celebration sound
        playCelebrationSound();
    }
}

// Function to trigger confetti explosion
function startConfetti() {
    confetti({
        particleCount: 500,
        spread: 90,
        origin: { y: 0.6 }
    });
}

// Function to play a celebration sound
function playCelebrationSound() {
    const sound = new Audio('celebration-sound.mp3'); // Replace with your sound file path
    sound.play();
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display countdown immediately when the page loads
updateCountdown();