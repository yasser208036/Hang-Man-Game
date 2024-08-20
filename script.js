// creating a keyboard daynamic
let keyboard = document.querySelector(".keyboard");
for (let i = 97; i <= 122; i++) {
  let button = document.createElement("button");
  button.textContent = String.fromCharCode(i);
  keyboard.appendChild(button);
}
// Object Of Words + Categories
const words = {
  programming: ["php", "javascript", "java", "c", "mysql", "python"],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: ["Einstein", "Hitchcock", "Alexander", "Cleopatra", "Ghandi"],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};
// apply the hint
let hints = Object.keys(words);
let randomHint = hints[Math.floor(Math.random() * hints.length)];
document.querySelector(".hint-text b").innerHTML = randomHint;
// get random value from hints
randomArryOfValue = words[randomHint];
let randomValue =
  randomArryOfValue[Math.floor(Math.random() * randomArryOfValue.length)];
// create a guess word based
let value = [...randomValue];
let wordDisplay = document.querySelector(".word-display");
wordDisplay.innerHTML = value.map(() => `<li class="letter"></li>`).join("");
// get buttons and add event click for each button
let keys = document.querySelectorAll(".keyboard button");
let hangMan = document.querySelector(".draw-content img");
let wrongCount = document.querySelector(".guess-text b span");
// empty arr to storage wordplace value in it and compare its length with the random value length
let placeValue = [];
// loop on keyboard keys and add event click for each key
keys.forEach((key) =>
  key.addEventListener("click", (e) => {
    // to contorl on action that done if clicked on wrong orright key
    let status = false;
    // block key after click
    e.target.classList.add("clicked");
    // loop on the word and clicked value
    value.forEach((val, index) => {
      if (e.target.textContent === val.toLowerCase()) {
        // add letters to the page
        let place = document.querySelectorAll(".letter");
        place[index].textContent = val;
        place[index].classList.add("guessed");
        status = true;
        // add value to the arr to compare it with the random word length
        placeValue.push(place[index].textContent);
        if (placeValue.length == value.length) {
          document.querySelector(".game-model img").src = "/images/victory.gif";
          document.querySelector(".game-model h4").textContent = "Congrats!";
          document.querySelector(
            ".game-model p"
          ).textContent = `You found the word: ${randomValue}`;
          document.querySelector(".game-model").classList.add("active");
        }
      }
    });
    if (status == false) {
      wrongCount.textContent++;
      hangMan.src = `/images/hangman-${wrongCount.textContent}.svg`;
      if (wrongCount.textContent == 6) {
        document.querySelector(".game-model").classList.add("active");
        document.querySelector(".game-model p b").textContent = randomValue;
      }
    }
  })
);
document.querySelector(".play-again").addEventListener("click", () => {
  window.location.reload();
  // document.querySelector(".game-model").classList.remove("active");
  // wordDisplay.innerHTML = value.map(() => `<li class="letter"></li>`).join("");
  // keys.forEach((key) => key.classList.remove("clicked"));
  // hangMan.src = `/images/hangman-0.svg`;
  // wrongCount.textContent = 0;
});
