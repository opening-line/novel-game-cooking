class MessageWindow {

  #messageElement;
  #message;

  constructor(message) {
    this.#messageElement = document.getElementById("text");
    this.#message = message
  }

  /**
   * @returns {Promise<void>}
   */
  async showText() {
    this.#messageElement.innerText = "";
    for (let i = 0; i < this.#message.length; i++) {
      this.#messageElement.innerText += this.#message[i];
      await new Promise(resolve => setTimeout(resolve, 20));
    }
  }
}

export { MessageWindow };
