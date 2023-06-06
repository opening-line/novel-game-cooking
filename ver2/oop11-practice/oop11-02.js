class ColorTheme {

  static JUICY = "#382323";
  static SPICY = "#264e4f";
  static SWEET = "#104811";
  static DEFAULT = "#222";

}

// 色を扱うコード

// これはどう使ってカラーコードを取得するでしょうか
// ここに書いてみてください










// しかしながらフィールドは書き換え可能になっています
// 書き換えられるのは困るでしょう。書き換えられないようにするには？


class ColorTheme {

  static JUICY = "juicy";
  static SPICY = "spicy";
  static SWEET = "sweet";
  static DEFAULT = "default";
  
  static getBackgroundColorCode(colorTheme) {
    switch (colorTheme) {
      case this.JUICY:
        return "#382323";
      case this.SPICY:
        return "#264e4f";
      case this.SWEET:
        return "#104811";
      case this.DEFAULT:
        return "#222";
      default:
        throw new Error("invalid color name");
    }
  }
}

// これは、書き換えられても特に問題ない。変数をそのままカラーコードとして使用してないから。

// では、この場合のカラーコードの取得方法はどうなりますか？
// ここに書いてみてください











// P.S.
// これを使ったChoiceButtonクラス

// Before

class ChoiceButton {

  #button;

  constructor(text, color = "#222") {
    this.#button = document.createElement("button");
    this.#button.innerText = text;
    this.#button.style.backgroundColor = color;
  }

  // 中略

}

// After

class ChoiceButton {

  #button;

  constructor(text, color = ColorTheme.DEFAULT) {
    this.#button = document.createElement("button");
    this.#button.innerText = text;
    this.#button.style.backgroundColor = ColorTheme.getBackgroundColorCode(color);
  }

  /* 中略 */
}