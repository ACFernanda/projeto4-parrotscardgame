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
