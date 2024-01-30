const textContainer = document.getElementById('text-container');
const hiddenButton = document.getElementById('hiddenButton');
let linesToAnimate = [];
let lineIndex = 0;
let charIndex = 0;

function addStringsToArray(existingArray) {
    if (Array.isArray(existingArray)) {
      for (let i = 1; i < arguments.length; i++) {
        existingArray.push(arguments[i]);
      }
  
      return existingArray;
    } else {
      console.error("The provided argument is not a valid array.");
      return null;
    }
  }

function animateText() {
  if (lineIndex < linesToAnimate.length) {
    const currentLine = linesToAnimate[lineIndex];

    if (charIndex < currentLine.length) {
      const letter = document.createElement('span');
      letter.textContent = currentLine.charAt(charIndex);
      letter.classList.add('glow');
      textContainer.appendChild(letter);
      setTimeout(() => {
        letter.classList.remove('glow');
      }, 2000);

      charIndex++;
      setTimeout(animateText, 80); 
    } else {
      lineIndex++;
      charIndex = 0;
      textContainer.appendChild(document.createElement('br')); 
      setTimeout(animateText, 500); 
      if (lineIndex === linesToAnimate.length) {
        setTimeout(fadeInButton, 2000);
      }
    }
  }
}

function addAttributesToArray(...attributes) {
    if (!Array.isArray(linesToAnimate)) {
      console.error('The first parameter must be an array.');
      return;
    }
  
    if (attributes.length === 0) {
      console.warn('No attributes provided to add.');
      return linesToAnimate; 
    }
  
    linesToAnimate.forEach((element) => {
      attributes.forEach((attribute) => {
        element[attribute] = true; 
      });
    });
  
    return linesToAnimate;
  }

function fadeInButton() {
  let opacity = 0;
  hiddenButton.style.display = 'block'; 
  const fadeInInterval = setInterval(() => {
    opacity += 0.05;
    hiddenButton.style.opacity = opacity;

    if (opacity >= 1) {
      clearInterval(fadeInInterval); 
    }
  }, 50);
}

