import { ChoiceButton } from "./ChoiceButton.js";

class ChoicesContainer {
  #choicesContainer;
  #buttons;

  /**
   *
   * @param {ChoiceButton} buttons
   */
  constructor(...buttons) {
    this.#choicesContainer = document.getElementById("button-container");
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
    const waitClickAnyButtons = []
    for (let i = 0; i < this.#buttons.length; i++) {
      const waitClick = this.#buttons[i].waitClick(i)
      waitClickAnyButtons.push(waitClick)
    }
    
    return await Promise.any(waitClickAnyButtons);
  }

  clear() {
    this.#choicesContainer.innerHTML = "";
  }
}

export { ChoicesContainer };
