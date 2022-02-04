let numberOfCards = parseInt(
  prompt("Escolha um número de cartas: de 4 a 14, par")
);
let cardsOpen = 0;
const cardsImages = [
  "bobrossparrot",
  "explodyparrot",
  "fiestaparrot",
  "metalparrot",
  "revertitparrot",
  "tripletsparrot",
  "unicornparrot",
];

function questionNumberOfCards() {
  while (numberOfCards % 2 !== 0 || numberOfCards > 14 || numberOfCards < 4) {
    numberOfCards = parseInt(
      prompt("Escolha um número de cartas: de 4 a 14, par")
    );
  }
}

questionNumberOfCards();

function dealCards() {
  let gameCards = [];
  for (let i = 0; i < numberOfCards / 2; i++) {
    gameCards.push(cardsImages[i]);
    gameCards.push(cardsImages[i]);
  }

  gameCards.sort(ramdomize);

  const boardGame = document.querySelector("main");
  for (let j = 0; j < gameCards.length; j++) {
    boardGame.innerHTML =
      boardGame.innerHTML +
      `
      <div class="card" data-identifier="card" onclick="selectCard(this)">
        <div class="shown-face" data-identifier="back-face">
          <img src="imagens/front.png" alt="parrot-logo" />
        </div>
        <div class="hidden-face hide" data-identifier="front-face">
          <img src="imagens/${gameCards[j]}.gif" alt="${gameCards[j]}" />
        </div>
      </div>`;
  }
}
dealCards();

function ramdomize() {
  return Math.random() - 0.5;
}

function selectCard(cardClass) {
  const selected = document.querySelector(".selected");
  if (selected !== null) {
    selected.classList.remove("selected");
  }
  cardClass.classList.add("selected");
  rotateCard();
  cardsOpen = cardsOpen + 1;
}

function rotateCard() {
  let shownFace = document.querySelector(".selected .shown-face");
  shownFace.classList.toggle("hide");
  let hiddenFace = document.querySelector(".selected .hidden-face");
  hiddenFace.classList.toggle("hide");
}
