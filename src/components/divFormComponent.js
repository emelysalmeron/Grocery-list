// eslint-disable-next-line import/no-cycle
import { handlerDoneItem } from "../handlers/handlerDoneItem.js";

// eslint-disable-next-line prettier/prettier
export const divFormComponent = (textId = "", textClass = "", addEvent = "") => {
  const div = document.createElement("div");
  let counter = 0;
  div.id = textId;
  div.className = textClass;
  const form = document.createElement("form");
  form.id = `${textId}${counter++}`;
  div.append(form);
  if (addEvent === "event") {
    div.addEventListener("click", handlerDoneItem);
  }
  return div;
};
