const magicButton = document.querySelector(".magicButton");

magicButton.addEventListener("click", function () {
  const magicText = document.querySelector(".magicText");
  const messages = ["Abracadabra!☠️", "Voila!😉", "Presto!🤨", "Shazam!🤪", "Ta-da!😁"];

  // Display a random magic message
  const randomIndex = Math.floor(Math.random() * messages.length);
  magicText.textContent = messages[randomIndex];
});
