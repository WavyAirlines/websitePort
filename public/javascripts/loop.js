// Array of texts to loop through
const texts = ['Developer', 'Designer'];
const loopingText = document.getElementById('loopingText');

let index = 0;
let isDeleting = false;
let text = '';

function loopText() {
  const currentText = texts[index];
  if (isDeleting) {
    text = currentText.substring(0, text.length - 1);
  } else {
    text = currentText.substring(0, text.length + 1);
  }
  loopingText.textContent = text;

  let speed = 200; // Adjust typing speed here

  if (isDeleting) {
    speed /= 2; // Adjust deleting speed here
  }

  // Check if text is fully typed/deleted
  if (!isDeleting && text === currentText) {
    isDeleting = true;
    speed = 1000; // Delay before deleting starts
  } else if (isDeleting && text === '') {
    isDeleting = false;
    index = (index + 1) % texts.length;
  }

  setTimeout(loopText, speed);
}

// Start the looping text animation
loopText();
