const addButtonHandler = event => {

    const inputForm = document.getElementById('input-form');
    const button = inputForm.children[1];
    button.innerHTML = 'add';
    newItem.appendChild(button);
    const newInput = document.createElement('input');
    newLi.appendChild(newInput); // adding to our list item

    const addButton = event.target;
    const addButtonParent = addButton.parentElement;
    const todoList = addButtonParent.parentElement;
    todoList.insertBefore(newLi, addButtonParent);

};

export { addButtonHandler };
