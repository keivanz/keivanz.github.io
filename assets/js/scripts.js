/*!
 * Color mode toggler from https://github.com/404GamerNotFound/bootstrap-5.3-dark-mode-light-mode-switch
 * Licensed under the MIT License.
 */

document.addEventListener('DOMContentLoaded', (event) => {
    const htmlElement = document.documentElement;
    const switchElement = document.getElementById('darkModeSwitch');

    // Set the default theme to dark if no setting is found in local storage
    const currentTheme = localStorage.getItem('bsTheme') || 'dark';
    htmlElement.setAttribute('data-bs-theme', currentTheme);
    switchElement.checked = currentTheme === 'dark';

    switchElement.addEventListener('change', function() {
        if (this.checked) {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('bsTheme', 'dark');
        } else {
            htmlElement.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('bsTheme', 'light');
        }
    });

    // Display a random quote after the DOM is loaded
    if (typeof displayRandomQuote === 'function') {
      displayRandomQuote();
    }
});

/*!
 * Random quote generator
 * Thank you Gemini for helping me write this
 */

const quotes = [
  {% for quote in site.data.quotes %}
    {
      quote: "{{ quote.quote }}", 
      author: "{% if quote.author %}{{ quote.author }}{% endif %}" 
    },
  {% endfor %}
];

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Check if the elements exist before trying to set their content
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  const quoteTitleElement = document.getElementById("quote-title");
  const quoteButtonElement = document.getElementById("quote-button");

  if (quoteElement) {
    quoteElement.textContent = randomQuote.quote;
  }
  if (authorElement) {
    if (randomQuote.author) {
      authorElement.textContent = " - " + randomQuote.author;
    } else {
      authorElement.textContent = "";
    }
  }

  // Show the title and button if they exist
  if (quoteTitleElement) {
    quoteTitleElement.style.display = "block";
  }
  if (quoteButtonElement) {
    quoteButtonElement.style.display = "block";
  }
}