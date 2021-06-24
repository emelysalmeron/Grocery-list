export const newItemListComponent = (userInput) => {
    // create checkbox for input
const input = document.createElement("input");
input.type = 'checkbox';
input.id = 'checkbox1';
input.name = '';
// to show the text from input we create a label
const label = document.createElement("label");
label.htmlFor = "checkbox1";
label.innerHTML = userInput;
const br = document.createElement("br");
const nodes = { input, label, br };
return nodes;
};

export const listFormComponent = () => {
const listForm = document.createElement("form");
listForm.id = "listForm";
listForm.classList.add("list");
return listForm;
};