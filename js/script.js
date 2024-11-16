document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".business-card");

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  // Subtle hover effect
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
    card.style.transition = "transform 0.3s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});
