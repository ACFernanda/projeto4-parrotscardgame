let numberOfCards = parseInt(
  prompt("Escolha um número de cartas: de 4 a 14, par")
);

function questionNumberOfCards() {
  while (numberOfCards % 2 !== 0 || numberOfCards > 14 || numberOfCards < 4) {
    numberOfCards = parseInt(
      prompt("Escolha um número de cartas: de 4 a 14, par")
    );
  }
}

questionNumberOfCards();

function dealCards() {
  const boardGame = document.querySelector("main");
  for (let i = 0; i < numberOfCards; i++) {
    boardGame.innerHTML =
      boardGame.innerHTML +
      `
    <div class="card" data-identifier="card" onclick="selectCard(this)">
      <div class="shown-face" data-identifier="back-face">
        <img src="imagens/front.png" alt="parrot-logo" />
      </div>
      <div class="hidden-face hide" data-identifier="front-face">
        <img src="imagens/bobrossparrot.gif" alt="bobrossparrot" />
      </div>
    </div>`;
  }
}

dealCards();

function selectCard(cardClass) {
  const selected = document.querySelector(".selected");
  if (selected !== null) {
    selected.classList.remove("selected");
  }
  cardClass.classList.add("selected");
  rotateCard();
}

function rotateCard() {
  let shownFace = document.querySelector(".selected .shown-face");
  shownFace.classList.toggle("hide");
  let hiddenFace = document.querySelector(".selected .hidden-face");
  hiddenFace.classList.toggle("hide");
}
