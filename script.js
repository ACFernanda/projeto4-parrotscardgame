let numberOfCards = parseInt(
  prompt("Escolha um número de cartas: de 4 a 14, par")
);

const cardsImages = [
  "bobrossparrot",
  "explodyparrot",
  "fiestaparrot",
  "metalparrot",
  "revertitparrot",
  "tripletsparrot",
  "unicornparrot",
];

const cardsOpen = [];

//---------------------------------------------------------------------------------------------

cardsImages.sort(randomize);

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

  gameCards.sort(randomize);

  const boardGame = document.querySelector("main");
  for (let j = 0; j < gameCards.length; j++) {
    boardGame.innerHTML =
      boardGame.innerHTML +
      `
      <div class="card" data-identifier="card" onclick="selectCard(this, '${gameCards[j]}')">
        <div class="shown-face show" data-identifier="back-face">
          <img src="imagens/front.png" alt="parrot-logo" />
        </div>
        <div class="hidden-face hide" data-identifier="front-face">
          <img class="${gameCards[j]}" src="imagens/${gameCards[j]}.gif" alt="${gameCards[j]}" />
        </div>
      </div>`;
  }
}
dealCards();

function randomize() {
  return Math.random() - 0.5;
}

function selectCard(cardClass, cardName) {
  if (cardsOpen.length < 2) {
    const selected = document.querySelector(".selected");
    if (selected !== null) {
      selected.classList.remove("selected");
    }
    cardClass.classList.add("selected");
    flipCard();
    cardsOpen.push(cardName);
  }

  if (cardsOpen.length === 2) {
    checkPair();
  }
}

function flipCard() {
  let shownFace = document.querySelector(".selected .shown-face");
  shownFace.classList.add("hide");
  shownFace.classList.remove("show");
  let hiddenFace = document.querySelector(".selected .hidden-face");
  hiddenFace.classList.remove("hide");
  hiddenFace.classList.add("show");
}

function checkPair() {
  if (cardsOpen[0] !== cardsOpen[1]) {
    setTimeout(closeCard, 5000);
  }
}

function closeCard() {
  for (let i = 0; i < cardsOpen.length; i++) {
    let shownFace = document.querySelector(".shown-face.hide");
    shownFace.classList.remove("hide");
    let hiddenFace = document.querySelector(".hidden-face.show");
    hiddenFace.classList.add("hide");
    hiddenFace.classList.remove("show");
  }
}
