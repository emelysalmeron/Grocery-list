// eslint-disable-next-line import/no-cycle
import { newButtonComponent } from "../components/newButtonComponent.js";
import { state } from "../data.js";

export const handlerDoneItem = (event) => {
  const target = event?.target;
  if (target?.nodeName === "INPUT" && target?.type === "checkbox") {
    const inputForm = document.getElementById("input-form");
    // update de check input
    for (const property of state.itemList) {
      if (property.userInput.includes(target.nextSibling.innerText)) {
        property.userCheck = target.checked;
      }
    }
    console.log("user check =>", state.itemList);
    // if there is not button
    if (!document.getElementById("doneButton")) {
      inputForm.appendChild(
        newButtonComponent("done", "doneButton", "click", "event")
      );
    }
  }
};
