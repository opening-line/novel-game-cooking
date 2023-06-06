function createButton(buttonText, clickValue) {
  const button = document.createElement("button");
  button.innerText = buttonText;
  const waitClick = new Promise((resolve) => {
    button.addEventListener("click", () => {
    resolve(clickValue);
    });
  });
  return { button, waitClick };
}