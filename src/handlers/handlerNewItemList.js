import { state } from "../data.js";
import { listFormComponent } from "../components/listFormComponent.js";
import { newItemListComponent } from "../components/newItemListComponent.js";

export const handlerNewItemList = (event) => {
  const { target } = event; // const target = event.target;
  if (target.value === "add") {
    const inputForm = document.getElementById("input-form");
    const userInput = inputForm.children[0];
    const userInputValue = userInput.value;
    state.itemList.push(userInputValue);
    const listContainer = document.getElementById("listRoot");
    if (listContainer.childElementCount < 1) {
      listContainer.appendChild(listFormComponent());
    }
    const newItem = newItemListComponent(userInputValue);
    const form = document.getElementById("listForm");
    form.appendChild(newItem.input);
    form.appendChild(newItem.label);
    form.appendChild(newItem.br);
  }
};
