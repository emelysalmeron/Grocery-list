// eslint-disable-next-line import/no-cycle
import { newButtonComponent } from "../components/newButtonComponent.js";
// eslint-disable-next-line import/no-cycle
import { divFormComponent } from "../components/divFormComponent.js";
import { newItemListComponent } from "../components/newItemListComponent.js";
import { state } from "../data.js";

const handlerDoneItem = (event) => {
  const { target } = event;
  if (target.nodeName === "INPUT") {
    // update de check input
    for (const property of state.itemList) {
      if (property.userInput.includes(target.nextSibling.innerText)) {
        property.userCheck = target.checked;
      }
    }
    console.log(state.itemList);
    const inputForm = document.getElementById("input-form");
    const doneButton = document.getElementById("addButton");
    // if there is not button
    if (!document.getElementById("addButton")) {
      inputForm.appendChild(
        newButtonComponent("done", "addButton", "click", "event")
      );
    }
    if (state.itemList.every((input) => input.userCheck === false)) {
      inputForm.removeChild(doneButton);
    }
  }
};

const moveItemToContainer = (event) => {
  event.preventDefault();
  const { target } = event;
  if (target.nodeName === "BUTTON") {
    const listRoot = document.getElementById("listRoot");
    const list = document.querySelectorAll(".checkbox1");
    for (const element of state.itemList) {
      if (element.userCheck === true) {
        if (!document.getElementById("doneList")) {
          const formContainer = divFormComponent("doneList", "list");
          formContainer.style.backgroundColor = "green";

          listRoot.after(formContainer);
        }
        const form = document.getElementById("doneList0");

        for (const nodeElement of list) {
          if (
            nodeElement?.nextElementSibling?.innerHTML === element.userInput
          ) {
            element.doneItem = true;
            element.userCheck = false;
            nodeElement.checked = element.userCheck;
            nodeElement.className = "checkbox1";
            nodeElement.nextElementSibling.nextElementSibling.remove();
            nodeElement.nextElementSibling.remove();
            nodeElement.remove();
            newItemListComponent(form, element);
            break;
          }
        }
        console.log(state.itemList);
      }
    }
  }
};

export { handlerDoneItem, moveItemToContainer };
