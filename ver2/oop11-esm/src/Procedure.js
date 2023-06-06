class Procedure {

  #text;

  constructor(text) {
    this.#text = text;
  }

  getText() {
    return this.#text;
  }
}

export { Procedure };
