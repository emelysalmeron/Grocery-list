import { state } from "../data.js";
import { divFormComponent } from "../components/divFormComponent.js";
import { newItemListComponent } from "../components/newItemListComponent.js";
import { errorMessage } from "../components/errorMessage.js";

export const handlerNewItemList = (event) => {
  const { target } = event; // const target = event.target;
  if (target.value === "add") {
    const inputForm = document.getElementById("input-form");
    const userInput = inputForm.children[0];
    const userInputValue = userInput.value;

    if (!userInputValue) {
      if (inputForm.childElementCount > 3) return;
      const message = errorMessage("Please enter some text to remove");
      inputForm.appendChild(message);
      setTimeout(() => inputForm.lastElementChild.remove(), 1500);
      return;
    }

    // Checks if user repeat the item in the list;
    const { itemList } = state;
    if (itemList.includes(userInputValue.toLowerCase())) {
      const message = errorMessage("Is already in the list");
      inputForm.appendChild(message);
      setTimeout(() => inputForm.lastElementChild.remove(), 1500);
      return;
    }
    // update the state
    itemList.push(userInputValue.toLowerCase());

    const rootContainer = document.getElementById("root");
    if (!document.getElementById("listRoot")) {
      rootContainer.after(divFormComponent("listRoot", "list"));
    }
    const listRoot = document.getElementById("listRoot");
    newItemListComponent(listRoot, itemList);
    userInput.value = "";
  }
  console.log(state);
};
