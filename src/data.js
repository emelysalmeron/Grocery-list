import { validate } from "./lib/validate.js";

const schema = {
  title: "Item list",
  description: "Shopping list",
  type: "object",
  properties: {
    itemList: {
      type: "array",
      description: "list of items to buy",
      items: {
        type: "object",
      },
    },
    sort: {
      type: "string",
      description: "property to sorts items from newest to eldest",
    },
  },
  required: ["itemList", "sort"],
};

export const state = {
  itemList: [],
  sort: "newest",
};

validate(schema, state);
