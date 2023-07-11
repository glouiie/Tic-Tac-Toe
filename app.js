const GameBoard = (() => {

  const startingBoard = 
  ["","","","","","","","",""]
const htmlGameBoard = document.getElementById("game-board");


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


const gameController = (() => {

  let marker = "naught"
  const cellElement = document.getElementsByClassName("item")

  function handleCellClick(event) {

    if (event.target.classList.contains("naught") || event.target.classList.contains("cross")) {
      return;
    }


    const naughtOrCrossDisplay = document.createElement("div");
    naughtOrCrossDisplay.classList.add(marker);
    naughtOrCrossDisplay.classList.add("marker");
    event.target.appendChild(naughtOrCrossDisplay);

    checkWinCondition()
    if (marker === "naught") {
      marker = "cross";
    } else {
      marker = "naught";
    }

    
  }

  function attachEventListeners() {
    Array.from(cellElement).forEach((cell) => {
      cell.addEventListener("click", handleCellClick);
    });
  }
  return attachEventListeners()
    
})()



function createPlayer(name,marker){

  return{
    name:name,
    marker:marker,
    score: 0,
  }

}