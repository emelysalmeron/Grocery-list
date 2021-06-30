export const h2title = (text = "") => {
  const h2 = document.createElement("h2");
  h2.style.color = "white";
  h2.innerHTML = text;
  return h2;
};
