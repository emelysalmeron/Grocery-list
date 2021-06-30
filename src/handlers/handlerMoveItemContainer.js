/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/no-cycle
import { divFormComponent } from "../components/divFormComponent.js";
import { h2title } from "../components/h2Component.js";
import { newItemListComponent } from "../components/newItemListComponent.js";
import { state } from "../data.js";

export const moveItemToContainer = (event) => {
  event.preventDefault();
  const { target } = event;

  const inputForm = document.getElementById("input-form");
  const listRoot = document.getElementById("listRoot");
  const list = document.querySelectorAll(".checkbox1");
  const form = document.getElementById("listRoot0");

  if (target.nodeName === "BUTTON") {
    // Verify if the element is checked
    for (const element of state.itemList) {
      if (element.userCheck === true) {
        if (!document.getElementById("doneList")) {
          const formContainer = divFormComponent("doneList", "list", "event");
          formContainer.style.backgroundColor = "green";
          formContainer.prepend(h2title("done"));
          listRoot.after(formContainer);
        }
        // Match dom element with state
        for (const nodeElement of list) {
          if (nodeElement?.nextElementSibling?.innerHTML === element.userInput) {
            // update state
            element.doneItem = true;
            element.userCheck = false;
            nodeElement.checked = element.userCheck;
            nodeElement.nextElementSibling.nextElementSibling.remove();
            nodeElement.nextElementSibling.remove();
            nodeElement.remove();
            const doneForm = document.getElementById("doneList0");
            newItemListComponent(doneForm, element);
            break;
          }
        }
        console.log(state.itemList);
      }
    }
  }
  // Change doom elements
  if (state.itemList.every((input) => input.userCheck === false)) {
    const doneButton = document.getElementById("doneButton");
    const addButton = document.getElementById("addButton");
    const input = document.getElementById("input");
    addButton.value = "add";
    input.placeholder = "write here";
    inputForm?.removeChild(doneButton);
  }
  if (form.children.length === 0) {
    listRoot.remove();
  }
};
