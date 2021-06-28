import { moveItemToContainer } from "../handlers/handlerDoneItem.js";

export const newButtonComponent = (text = "", newId = "", newClass = "", addEvent = "") => {
  const button = document.createElement("button");
  button.innerHTML = text;
  button.id = newId;
  button.className = newClass;
  if (addEvent === "event") {
    button.addEventListener("click", moveItemToContainer);
  }
  return button;
};
