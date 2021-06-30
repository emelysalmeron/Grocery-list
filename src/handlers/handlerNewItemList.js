import { state } from "../data.js";
import { divFormComponent } from "../components/divFormComponent.js";
import { newItemListComponent } from "../components/newItemListComponent.js";
import { errorMessage } from "../components/errorMessage.js";
import { h2title } from "../components/h2Component.js";

export const handlerNewItemList = (event) => {
  const { target } = event; // const target = event.target;
  if (target.value === "add") {
    const inputForm = document.getElementById("input-form");
    const userInput = inputForm.children[0];
    const userInputValue = userInput.value;

    if (!userInputValue) {
      const message = errorMessage("Please enter some text to add");
      inputForm.appendChild(message);
      setTimeout(() => inputForm.lastElementChild.remove(), 1500);
      return;
    }

    // Checks if user repeat the item in the list;
    const { itemList } = state;
    for (const element of itemList) {
      if (element.userInput === userInputValue) {
        const message = errorMessage("Is already in the list");
        inputForm.appendChild(message);
        setTimeout(() => {
          inputForm.lastElementChild.remove();
          userInput.value = "";
        }, 1500);
        return;
      }
    }
    // add user input data to the state
    itemList.push({ userInput: userInputValue.toLowerCase(), doneItem: false });

    const rootContainer = document.getElementById("root");
    if (!document.getElementById("listRoot")) {
      rootContainer.after(divFormComponent("listRoot", "list", "event"));
      const listRoot = document.getElementById("listRoot");
      listRoot.prepend(h2title("to buy"));
    }
    const formRoot = document.getElementById("listRoot0");
    for (const element of itemList) {
      if (element.userInput === userInputValue) {
        newItemListComponent(formRoot, element);
      }
    }

    // update the state
    const checkBox = document.querySelectorAll(".checkbox1");
    for (const element of checkBox) {
      if (
        element.nextElementSibling.innerHTML ===
          itemList[itemList.length - 1].userInput &&
        itemList[itemList.length - 1].doneItem === false
      ) {
        itemList[itemList.length - 1].userInput =
          element.nextElementSibling.innerHTML;
        itemList[itemList.length - 1].userCheck = element.checked;
        userInput.value = "";
        console.log("new Item => ", state);
      }
    }
  }
};
