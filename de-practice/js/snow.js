export function createSnowflakes() {
  const snowContainer = document.getElementById("snow-container");
  const snowflakeCount = 50;

  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.innerHTML = "❄";

    // Randomize starting position
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.top = "-10px";

    // Randomize snowflake properties
    const duration = Math.random() * 3 + 4; // 4-7 seconds
    const size = Math.random() * 10 + 10; // 10-20px
    const opacity = Math.random() * 0.4 + 0.6; // 0.6-1.0

    snowflake.style.animationDuration = `${duration}s`;
    snowflake.style.fontSize = `${size}px`;
    snowflake.style.opacity = opacity;

    // Add some rotation for more natural movement
    snowflake.style.transform = `rotate(${Math.random() * 360}deg)`;

    snowContainer.appendChild(snowflake);

    // Remove snowflake and create a new one when animation ends
    snowflake.addEventListener("animationend", () => {
      snowflake.remove();
      createSnowflake();
    });
  }

  // Create initial snowflakes with staggered timing
  for (let i = 0; i < snowflakeCount; i++) {
    setTimeout(createSnowflake, 100 * i);
  }
}
