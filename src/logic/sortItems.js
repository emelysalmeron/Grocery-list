const sortItems = (toSort = [], sortType = "") => {
  let sorted = [];

  switch (sortType) {
    case "Alphabetical":
      sorted = toSort.sort((a, b) => (a.userInput > b.userInput ? 1 : -1));
      break;
    default:
      sorted = toSort;
  }
  return sorted;
};

export { sortItems as default };
