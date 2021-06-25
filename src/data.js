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
        type: "string",
      },
    },
  },
  required: ["itemList"],
};

export const state = {
  itemList: [],
};

validate(schema, state);
