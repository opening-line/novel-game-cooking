class ChoiceButton {

  #button;

  // color を追加
  constructor(text, color = ColorTheme.DEFAULT) {
    this.#button = document.createElement("button");
    this.#button.innerText = text;
    // 色を設定する
    this.#button.style.backgroundColor = ColorTheme.getBackgroundColorCode(color);
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