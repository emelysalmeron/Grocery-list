import { state } from "../data.js";

export const handlerRemoveButton= (event) => {
    debugger; //every time user checked the list they want to remove and clicked the remove button
    const liList = [...document.querySelectorAll(".checkbox1")];
    const { target } = event;
    if (target.value === "remove") {
        liList.forEach((input) => {
            if (input.checked === true) {
                if (state.itemList.includes(input.nextElementSibling.innerHTML)) {
                    const index = state.itemList.indexOf(input.nextElementSibling.innerHTML);
                    state.removedItems.push(input.nextElementSibling.innerHTML);
                    state.itemList.splice(index, 1);
                }
                input.nextElementSibling.nextElementSibling.remove();
                input.nextElementSibling.remove();
                input.remove();
            }
        });
    }
};
