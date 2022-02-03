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
    <div class="card" data-identifier="card" onclick="rotateCard(this)">
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

function rotateCard(cardClass) {
  let shownFace = document.querySelector(".shown-face");
  shownFace.classList.toggle("hide");
  let hiddenFace = document.querySelector(".hidden-face");
  hiddenFace.classList.toggle("hide");
}
