document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".business-card");
  const cardInner = document.querySelector(".card-inner");
  const slidingPaper = document.querySelector(".sliding-paper");
  const tab = document.querySelector(".tab");
  const arrow = document.querySelector(".arrow-icon");

  // Business card flip
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.2) translateY(-20px)";
    card.style.transition = "transform 0.3s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1) translateY(0)";
  });

  // Hover effect
  tab.addEventListener("mouseenter", () => {
    if (!slidingPaper.classList.contains("peek")) {
      slidingPaper.classList.add("peek");
      arrow.style.transform = "rotate(180deg)";
      arrow.style.transition = "transform 0.3s ease";
    } else if (slidingPaper.classList.contains("peek")) {
      slidingPaper.classList.remove("peek");
      arrow.style.transform = "rotate(0deg)";
    }
  });
});
