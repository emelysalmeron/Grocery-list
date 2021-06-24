
export const listFormComponent = (itemList) => {
const listForm = document.createElement("form");
listForm.id = "listForm";
listForm.classList.add("list");
return listForm;
}