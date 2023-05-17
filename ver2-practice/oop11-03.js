// Before

class Recipe {

  #name;
  #procedures;
  #colorTheme;

  constructor(name, procedures) {
    this.#name = name;
    this.#procedures = procedures;
    this.#colorTheme = ColorTheme.DEFAULT;
  }

  getName() {
    return this.#name
  }

  getProcedureCount() {
    return this.#procedures.length;
  }

  getProcedureText(index) {
    const text = this.#procedures[index].getText();
    return `${index}.${text}`
  }

  getColorTheme() {
    return this.#colorTheme;
  }
}


// After


class Recipe {

  #name;
  #procedures;
  #colorTheme;

  constructor(name, procedures, colorTheme = ColorTheme.DEFAULT) {
    this.#name = name;
    this.#procedures = procedures;
    this.#colorTheme = colorTheme;
  }

  // 中略

  getColorTheme() {
    return this.#colorTheme;
  }
}


// 以下のクラスを編集して、色を指定しよう

class ChickenRiceRecipe extends Recipe {
  constructor() {
    super(
      "チキンライス", [
        new Procedure("ご飯を炊く"),
        new Procedure("チキンを炒める"),
        new Procedure("野菜を炒める"),
        new Procedure("ケチャップで炒める"),
        new Procedure("ご飯と混ぜる"),
      ]);
  }
}