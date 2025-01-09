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

  switchElement.addEventListener('change', function () {
      if (this.checked) {
          htmlElement.setAttribute('data-bs-theme', 'dark');
          localStorage.setItem('bsTheme', 'dark');
      } else {
          htmlElement.setAttribute('data-bs-theme', 'light');
          localStorage.setItem('bsTheme', 'light');
      }
  });
});

/*!
 * Random quote generator
 * Thank you Gemini for helping me write this
 */
const quotes = [
    {% for quote in site.data.quotes %}
        { 
            quote: "{{ quote.quote | escape_once }}", 
            author: "{% if quote.author %}{{ quote.author | escape_once }}{% endif %}" 
        },
    {% endfor %}
];

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    document.getElementById("quote").textContent = randomQuote.quote;
    if (randomQuote.author) {
        document.getElementById("author").textContent = "- " + randomQuote.author;
    } else {
        document.getElementById("author").textContent = ""; // Clear author if not present
    }
    // Show the title when JavaScript is enabled
    document.getElementById("quote-title").style.display = "block";
}

// Call displayRandomQuote() when the DOM is ready
document.addEventListener('DOMContentLoaded', (event) => {
    displayRandomQuote();
  });  