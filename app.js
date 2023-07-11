const GameBoard = (() => {
  const startingBoard = ["", "", "", "", "", "", "", "", ""];
  const htmlGameBoard = document.getElementById("game-board");

  function createGameBoard() {
    startingBoard.forEach((_cell, index) => {
      const cellElement = document.createElement("div");
      cellElement.classList.add("item");
      cellElement.id = index;

      htmlGameBoard.appendChild(cellElement);
    });
  }

  return createGameBoard();
})();

const gameController = (() => {
  let marker = "naught";
  const cellElements = document.getElementsByClassName("item");

  function handleCellClick(event) {
    if (
      event.target.classList.contains("naught") ||
      event.target.classList.contains("cross")
    ) {
      return;
    }
  
    const naughtOrCrossDisplay = document.createElement("div");
    naughtOrCrossDisplay.classList.add(marker);
    naughtOrCrossDisplay.classList.add("marker");
    event.target.appendChild(naughtOrCrossDisplay);
  
    checkWinCondition(cellElements, marker);
  
    marker = marker === "naught" ? "cross" : "naught";
  }
  
  function checkWinCondition(cellElements, marker) {
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
  
    for (let i = 0; i < winCombinations.length; i++) {
      const combination = winCombinations[i];
      const [a, b, c] = combination;
    
  
      if (
        cellElements[a] &&
        cellElements[a].firstChild &&
        cellElements[a].firstChild.classList.contains(marker) &&
        cellElements[b] &&
        cellElements[b].firstChild &&
        cellElements[b].firstChild.classList.contains(marker) &&
        cellElements[c] &&
        cellElements[c].firstChild &&
        cellElements[c].firstChild.classList.contains(marker)
      ) {
        alert("we have a winner!")
      }
    }
  
  
  }
  


  function attachEventListeners() {
    Array.from(cellElements).forEach((cell) => {
      cell.addEventListener("click", handleCellClick);
    });
  }

  return attachEventListeners();
})();

function createPlayer(name, marker) {
  return {
    name: name,
    marker: marker,
    score: 0,
  };
}
