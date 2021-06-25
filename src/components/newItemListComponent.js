export const newItemListComponent = (objToAppend, userInput) => {
  const input = document.createElement("input");
  input.type = "checkbox";
  input.className = "checkbox1";
  input.name = "";
  const label = document.createElement("label");
  label.htmlFor = ".checkbox1";
  label.innerHTML = userInput[userInput.length - 1];
  const br = document.createElement("br");
  objToAppend.append(input);
  objToAppend.append(label);
  objToAppend.append(br);
};
