const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const instagramBtn = document.getElementById("instagram");
const newQuoteBtn = document.getElementById("new-quote");

// API quote data
let apiQuotes = [];

// Show New Quote
function newQuote() {
  // Pick a random quote from apiQuotes array:
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // Check if Author field is blank and replace it with "Unknown"
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }

  // Check Quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  // Set Quote, Hide Loader
  quoteText.textContent = quote.text;
}

//  Get Quote from api
async function getQuotes() {
  const apiURL = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //error code here
  }
}

// Share on instagram:
function instagramQuote() {
  const instagrmURL = `https://www.instagram.com/create/story=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(instagrmURL, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
instagramBtn.addEventListener("click", instagramQuote);

// On load
getQuotes();
// loading();
