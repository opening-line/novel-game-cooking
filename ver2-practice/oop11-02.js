class ColorTheme {

  static JUICY = "#382323";
  static SPICY = "#264e4f";
  static SWEET = "#104811";
  static DEFAULT = "#222";

}

// 色を扱うコード

// これはどうやって使うでしょうか
// ここに書いてみてください











// フィールドが書き換えられるのは困でしょう。


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

// 今回は、書き換えられても特に問題ない。それを使用している個所がない。
// それを防止するテクニックはあるが、コードが複雑になるのでここでは扱わない

// では、この場合の使い方はどうなりますか？
// ここに書いてみてください
