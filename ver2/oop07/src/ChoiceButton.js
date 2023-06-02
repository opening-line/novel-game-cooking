class ChoiceButton {

  #button;

  constructor(text) {
    this.#button = document.createElement("button");
    this.#button.innerText = text;
  }

  waitClick(index) {
    return new Promise((resolve) => {
      this.#button.addEventListener("click", () => {
        resolve(index);
      });
    });
  }

  toDomElement() {
    return this.#button;
  }
}

export { ChoiceButton };
