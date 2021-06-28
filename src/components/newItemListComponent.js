export const newItemListComponent = (objToAppend, element) => {
  const input = document.createElement("input");
  input.type = "checkbox";
  input.className = "checkbox1";
  const label = document.createElement("label");
  label.htmlFor = ".checkbox1";
  label.innerHTML = element.userInput;
  const br = document.createElement("br");
  objToAppend.append(input);
  objToAppend.append(label);
  objToAppend.append(br);
};
