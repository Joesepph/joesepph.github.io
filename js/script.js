document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".theme-toggle-button");
  const text = document.getElementById("under-btn-txt");

  button.addEventListener("click", function () {
    // set opacity to 100%
    text.style.opacity = "1";
    text.style.transition = "opacity 0s";

    // fade out after a delay
    setTimeout(() => {
      text.style.opacity = "0";
      text.style.transition = "opacity 0.6s ease-out";
    }, 250);
  });
});

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
    document.getElementById("author").innerHTML = `~ ${randomQuote.author}`;
  } catch (error) {
    console.error(
      "Oopsie Daisy, seems like there was an error generating a quote!",
      error,
    );
  }
}

// call the function when the website loads
window.onload = quoteRandomizer;
