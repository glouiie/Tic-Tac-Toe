function placeObject() {

    const parentContainer = document.getElementById("board-contents");

    parentContainer.addEventListener("click", (event) => {
      const clickedItem = event.target;

      if (clickedItem.classList.contains("item")) {
        clickedItem.style.backgroundColor = "red"; // TODO: Update to place current player's symbol
      }
    });
  }

  placeObject();