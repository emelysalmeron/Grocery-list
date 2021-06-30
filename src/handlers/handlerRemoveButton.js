import { state } from "../data.js";

export const handlerRemoveButton = (event) => {
  // every time user checked the list they want to remove and clicked the remove button
  const liList = [...document.querySelectorAll(".checkbox1")];
  const { target } = event;
  if (target.value === "remove") {
    state.itemList.forEach((element) => {
      if (element.userCheck === true) {
        liList.forEach((liElement) => {
          if (
            liElement.nextElementSibling.innerHTML === element.userInput &&
            liElement.checked === true
          ) {
            // update the state
            const index = state.itemList.indexOf(element);
            state.itemList.splice(index, 1);
            // update the DOOM
            liElement.nextElementSibling.nextElementSibling.remove();
            liElement.nextElementSibling.remove();
            liElement.remove();
            console.log("removed log => ", state);
          }
        });
      }
    });
  }
  const toBuyForm = document.getElementById("listRoot0");
  const listRoot = document.getElementById("listRoot");
  const doneForm = document.getElementById("doneList0");
  const doneDiv = document.getElementById("doneList");
  const inputForm = document.getElementById("input-form");
  if (toBuyForm?.children.length === 0) {
    listRoot.remove();
  } else if (doneForm?.children.length === 0) {
    doneDiv.remove();
  }
  if (document.getElementById("doneButton")) {
    if (state.itemList.every((input) => input.userCheck === false)) {
      const doneButton = document.getElementById("doneButton");
      const addButton = document.getElementById("addButton");
      const input = document.getElementById("input");
      addButton.value = "add";
      input.placeholder = "write here";
      inputForm?.removeChild(doneButton);
    }
  }
};
