// Before

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


// After

class ChoiceButton {

  #button;

  constructor(text, color = "#222") {
    this.#button = document.createElement("button");
    this.#button.innerText = text;
    this.#button.style.backgroundColor = color;
  }

  // 中略

}


// ChoiceButtonのコンストラクターの使い方（インスタンス化）を２通り書いてください
