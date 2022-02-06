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

let cardsOpen = [];

const correctPair = [];

let numberOfPlays = 0;
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
        <div class="shown-face show incorrect" data-identifier="back-face">
          <img src="imagens/front.png" alt="parrot-logo" />
        </div>
        <div class="hidden-face hide incorrect" data-identifier="front-face">
          <img class="${gameCards[j]}" src="imagens/${gameCards[j]}.gif" alt="${gameCards[j]}" />
        </div>
      </div>`;
  }
}
dealCards();

function randomize() {
  return Math.random() - 0.5;
}

function selectCard(divCard, cardName) {
  if (cardsOpen.length < 2) {
    const selected = document.querySelector(".selected");
    if (selected !== null) {
      selected.classList.remove("selected");
    }
    divCard.classList.add("selected");
    flipCard();
    cardsOpen.push(cardName);
  }

  if (cardsOpen.length === 2) {
    checkPair(cardName);
  }
}

function flipCard() {
  let shownFace = document.querySelector(".selected .shown-face.incorrect");
  shownFace.classList.add("hide");
  shownFace.classList.remove("show");
  let hiddenFace = document.querySelector(".selected .hidden-face.incorrect");
  hiddenFace.classList.remove("hide");
  hiddenFace.classList.add("show");

  numberOfPlays = numberOfPlays + 1;
  setTimeout(endGame, 0300);
}

function checkPair() {
  let shownFace = document.querySelector(".shown-face.incorrect.hide");
  let hiddenFace = document.querySelector(".hidden-face.incorrect.show");
  if (cardsOpen[0] !== cardsOpen[1]) {
    setTimeout(closeCard, 1000);
  } else {
    for (let i = 0; i < cardsOpen.length; i++) {
      correctPair.push(cardsOpen[i]);
      let shownFaceBeCorrect = document.querySelectorAll(
        ".shown-face.incorrect.hide"
      );
      let hiddenFaceBeCorrect = document.querySelectorAll(
        ".hidden-face.incorrect.show"
      );
      for (let i = 0; i < shownFaceBeCorrect.length; i++) {
        let correct = shownFaceBeCorrect[i];
        correct.classList.remove("incorrect");
      }
      for (let i = 0; i < hiddenFaceBeCorrect.length; i++) {
        let correct2 = hiddenFaceBeCorrect[i];
        correct2.classList.remove("incorrect");
      }
    }
    clearCardsOpen();
  }
}

function closeCard() {
  for (let i = 0; i < cardsOpen.length; i++) {
    let shownFace = document.querySelector(".shown-face.incorrect.hide");
    shownFace.classList.remove("hide");
    shownFace.classList.add("show");
    let hiddenFace = document.querySelector(".hidden-face.incorrect.show");
    hiddenFace.classList.remove("show");
    hiddenFace.classList.add("hide");
  }
  clearCardsOpen();
}

function clearCardsOpen() {
  cardsOpen = [];
}

function endGame() {
  if (correctPair.length === numberOfCards) {
    alert(`Você ganhou em ${numberOfPlays} jogadas em ${interval} segundos!`);
    let playAgain = prompt(
      "Jogar novamente? Vou insistir até você dizer 'SIM'."
    );
    while (playAgain.toUpperCase() !== "SIM") {
      playAgain = prompt("Jogar novamente? Vou insistir até você dizer 'SIM'.");
    }
    window.location.reload();
  }
}

let interval = 0;
function addOneSecond() {
  const stopwatch = document.querySelector("span");
  stopwatch.innerHTML = parseInt(stopwatch.innerHTML) + 1;
  interval = interval + 1;
}
setInterval(addOneSecond, 1000);
