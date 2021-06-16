# Custom video player

Creating a full website to support _Grocery-list_ activity, working as a team with Git and GitHub, during the last week of Separation-of-Concern module in HYF Belgium program.

---

## WIREFRAME

![wireframe](../public/wireframe.svg)

---

## 0.Setup

- [x] Create repo
- [x] Add Contributors
- [x] Set up Project Board
- [x] Start README
- [x] Turn on GitHub Pages

## 1. Item list initial page

**As a user I want to be able to see all the items in the list.**

> REPO

- This user story is developed on branch `initialHtmlCss`.
- This branch is merged to `master` branch after the acceptance criteria have been checked off.

> HTML

- `index.html`: build html structure according wireframe.

> CSS

- `style.css`: build html structure according wireframe.

> JavaScript

- An array named `itemsList` to get the data inputted by the user, will be stored `data.js` file.

## 2. Add a new item to the list

**As a user I want to be able to add a new item to the list.**

> REPO

- This user story is developed on branch `addNewItem`.
- This branch is merged to `master` branch after the acceptance criteria have been checked off.

> HTML

- Will be rendered in javascript procedure.

> CSS

- will be rendered in javascript procedure.

> JavaScript

1. _Procedure_

   - Create, a procedure function that renders html and css code once the add button is clicked stored in `newItemList.js`

2. _handlers_

   - Create a handler that store the data inputted by the user and call the procedure to add the new user input in the list the handler will be stored in handlerNewItemList.js
  
3. _listener_

   - Attach a `keyUp` event to the `input tag`.
   - Attach a `click` event to the `add button`.

## 3. Remove any item from the list

**As a user I want to be able to remove any item from the list.**

> REPO

- This user story is developed on branch `removeItem`.
- This branch is merged to `master` branch after the acceptance criteria have been checked off.

> HTML

- Will be rendered in javascript handlers.

> CSS

- will be rendered in javascript handlers.

> JavaScript

1. _handlers_

   - Create a handler that remove the data inputted by the user and remove  user input in the list, the handler will be stored in handlerRemoveItemList.js
  
2. _listener_

   - Attach a `click` event to the `remove button`.

## 4. Edit the description of each item in their list

**As a user I want to be able to edit the description of each item in their list.**

> REPO

- This user story is developed on branch `editItem`.
- This branch is merged to `master` branch after the acceptance criteria have been checked off.

> HTML

- Will be rendered in javascript handlers.

> CSS

- will be rendered in javascript handlers.

> JavaScript

1. _handlers_

   - Create a handler that prompt the user to add the modification, the new data inputted by the user will modify de data stored, the handler will be stored in handlerEditItemList.js
  
2. _listener_

- Attach a `click` event to the `list input`.

## 5. Mark an item as "done" or "not done"

**As a user I want to be able to mark an item as "done" or "not done".**

> REPO

- This user story is developed on branch `doneItem`.
- This branch is merged to `master` branch after the acceptance criteria have been checked off.

> HTML

- Will be rendered in javascript handler.

> CSS

- will be rendered in javascript handler.

> JavaScript

1. _handlers_

   - Create a handler that toggle the checklist, the handler will be stored in handlerToggleItemList.js
  
2. _listener_

- Attach a `click` event to the `checklist`.

## 6. Register, log in and log out

**As a user I want to be able to register myself, to log in and log out, so that I can keep the privacy of my list.**

> REPO

- This user story is developed on branch `registerItem`, `logIn`, `logOut`.
- This branch is merged to `master` branch after the acceptance criteria have been checked off.

> HTML

- Will be rendered in javascript handler.

> CSS

- will be rendered in javascript handler.

> JavaScript

1. _data_

   - Create array to store the object data from the user, the variable will be stored in `data.js`

2. _handlers_

   - Create a handler that store the new user, the handler will be stored in handlerRegisterUser.js
   - Create a handler that log in the user, the handler will be stored in handlerLogInUser.js
   - Create a handler that Log out the user, the handler will be stored in handlerLogOutUser.js
  
3. _listener_

- Attach a `click` event to the `checklist`.
