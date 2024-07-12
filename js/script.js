const toggleButton = document.querySelector(".theme-toggle-button");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
  toggleButton.textContent = body.classList.contains("dark-mode")
    ? "Light Mode"
    : "Dark Mode";
});

// Initialize button text
toggleButton.textContent = body.classList.contains("dark-mode")
  ? "Light Mode"
  : "Dark Mode";

// function to fetch .json file data and display one random quote each time the website loads
async function quoteRandomizer() {
  try {
    // fetch the .json file
    const response = await fetch("/js/quotes.json");

    // check if the response is ok
    if (!response.ok) {
      throw new Error("Response not ok: " + response.statusText);
    }

    // parse the .json data
    const quotes = await response.json();

    // select a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // display the quote
    document.getElementById("quote").innerHTML = `"${randomQuote.quote}"`;
    document.getElementById("author").innerHTML =
      `~ ${randomQuote.philosopher}`;
  } catch (error) {
    console.error(
      "Oopsie Daisy, seems like there was an error generating a quote!",
      error,
    );
  }
}

// call the function when the website loads
window.onload = quoteRandomizer;
