// Get the necessary elements from the DOM
const inputText = document.getElementById("input-text");
const countButton = document.getElementById("count-btn");
const vowelCount = document.getElementById("vowel-count");

// Function to count vowels in the input text
function countVowels() {
  const text = inputText.value.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
      count++;
    }
  }

  vowelCount.textContent = count;
}

// Attach event listener to the count button
countButton.addEventListener("click", countVowels);
