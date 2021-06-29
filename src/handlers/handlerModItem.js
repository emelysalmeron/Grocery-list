/* eslint-disable no-multi-assign */
/* eslint-disable no-extra-parens */
/* eslint-disable no-param-reassign */
import { state } from "../data.js";
import { errorMessage } from "../components/errorMessage.js";

export const handlerModifyItem = (event) => {
  const { target } = event;
  const { itemList } = state;
  const addButton = document.getElementById("addButton");
  const input = document.getElementById("input");
  const labelList = document.querySelectorAll("label");
  const inputForm = document.getElementById("input-form");
  const doneButton = document.getElementById("doneButton");
  // if user click checkbox
  if (target.nodeName === "INPUT" && target.type === "checkbox") {
    addButton.value = "modify";
    input.placeholder = "Please enter new text";
  }
  // if user click modify
  if (target.nodeName === "INPUT" && target.value === "modify") {
    const trueItems = itemList.filter((x) => x.userCheck === true);
    if (trueItems.length > 1) {
      const message = "one item at a time";
      inputForm.appendChild(errorMessage(message));
      setTimeout(() => inputForm.lastElementChild.remove(), 1500);
      return;
    }

    itemList.forEach((element) => {
      if (element.userCheck === true) {
        labelList.forEach((labelElement) => {
          if (labelElement.innerHTML === element.userInput) {
            labelElement.innerHTML = input.value;
            // update the state
            element.userInput = labelElement.innerHTML;
            const deselect = (labelElement.previousElementSibling.checked = false);
            element.userCheck = deselect;
            input.value = "";
          }
        });
        if (itemList.every((elementCheck) => elementCheck.userCheck === false)) {
          addButton.value = "add";
          input.placeholder = "write here";
          inputForm.removeChild(doneButton);
        }
      }
    });
  }
  console.log(state.itemList);
};
