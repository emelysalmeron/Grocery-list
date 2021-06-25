export const errorMessage = (text = "") => {
  const p = document.createElement("p");
  p.innerHTML = text;
  p.style.color = "red";
  return p;
};
