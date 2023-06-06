// noinspection JSAnnotator


class ChoicesContainer {

  #choicesContainer;
  #buttons;

  /**
   *
   * @param {ChoiceButton} buttons
   */
  constructor(...buttons) {
    this.#choicesContainer = document.getElementById("choices-container");
    this.#buttons = buttons;
    for (let button of this.#buttons) {
      this.#choicesContainer.appendChild(button.toDomElement());
    }
  }

  /**
   *
   * @returns {Promise<number>}
   */
  async waitClickAny() {
    return await Promise.any(this.#buttons.map((button, index) => button.waitClick().then(() => index)));
  }

  clear() {
    this.#choicesContainer.innerHTML = "";
  }
}


class ChoiceButton {

  #button;

  constructor(text) {
    this.#button = document.createElement("button");
    this.#button.innerText = text;
  }

  waitClick() {
    return new Promise((resolve) => {
      this.#button.addEventListener("click", () => {
        resolve();
      });
    });
  }

  toDomElement() {
    return this.#button;
  }
}


// ChoicesContainerとChoiceButtonを使って、「選択肢１」「選択肢２」「選択肢３」を一度に表示するにはどうする？