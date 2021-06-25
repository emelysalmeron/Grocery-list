export const divFormComponent = (textId = "", textClass = "") => {
  const div = document.createElement("div");
  let counterForm = 0;
  div.id = textId;
  div.className = textClass;
  const form = document.createElement("form");
  form.id = `${textId}${counterForm++}`;
  form.classList = `${textClass}${counterForm++}`;
  div.append(form);
  return div;
};
