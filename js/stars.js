const background = document.getElementById("background");
const stars = [];
const starCount = 1000;

// Create stars
for (let i = 0; i < starCount; i++) {
  const star = document.createElement("div");
  star.className = "star";
  const size = Math.random() * 6 + 3;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  background.appendChild(star);
  stars.push(star);
}

// Interactive effect
document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  stars.forEach((star) => {
    const rect = star.getBoundingClientRect();
    const starX = rect.left + rect.width / 2;
    const starY = rect.top + rect.height / 2;

    const distance = Math.sqrt(
      Math.pow(mouseX - starX, 2) + Math.pow(mouseY - starY, 2),
    );
    const maxDistance = 50;

    if (distance < maxDistance) {
      const scale = 1 + (1 - distance / maxDistance) * 10;
      const opacity = 0.5 + (1 - distance / maxDistance) * 0.5;
      star.style.transform = `scale(${scale})`;
      star.style.backgroundColor = "#a7b4cb";
      star.style.opacity = opacity;

      // Clear any existing timeout
      clearTimeout(star.timeout);

      // Set a new timeout for the trail effect
      star.timeout = setTimeout(() => {
        star.style.transform = "scale(1)";
        star.style.opacity = "0.5";
        star.style.backgroundColor = "#5c6370";
      }, 1500);
    }
  });
});
