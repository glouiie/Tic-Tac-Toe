const htmlGameBoard = document.getElementById("game-board");

const GameBoard = (() => {

  const startingBoard = 
  ["","","","","","","","",""]

  function createGameBoard(){

    startingBoard.forEach((_cell,index) =>{
      const cellElement = document.createElement("div")
      cellElement.classList.add("item")
      cellElement.id = index

      htmlGameBoard.appendChild(cellElement)
    })

  }

    return createGameBoard();

})();




