document.addEventListener("DOMContentLoaded", function(event) {
  // your code here

const text1 = "Sans Commission";
const text2 = "\u00c0 Forfait Fixe de 3 900 TND";

  // Set initial state of text container
  const textContainer = document.getElementById("text-container");
  document.getElementById("text-container").style.display = "inline-block";

  // Define function to animate text
  function animateText(text) {
    let i = 0;
    textContainer.innerHTML = "";
    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    textContainer.appendChild(cursor);

    const intervalId = setInterval(function() {
      if (i < text.length) {
        textContainer.insertBefore(document.createTextNode(text.charAt(i)), cursor);
        i++;
      } else {
        clearInterval(intervalId);
        setTimeout(function() {
          textContainer.style.display = "none";
          animateText(text === text1 ? text2 : text1);
          textContainer.style.display = "inline-block";
        }, 2000);
      }
    }, 100);
  }

  // Start the animation
  animateText(text1);
});