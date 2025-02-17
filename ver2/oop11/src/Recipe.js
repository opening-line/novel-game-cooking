class Recipe {

  #name;
  #procedures;
  // colorTheme を追加
  #colorTheme;

  // colorTheme を追加
  constructor(name, procedures, colorTheme = ColorTheme.DEFAULT) {
    this.#name = name;
    this.#procedures = procedures;
    this.#colorTheme = colorTheme;
  }

  getName() {
    return this.#name
  }

  getProcedureCount() {
    return this.#procedures.length;
  }

  getProcedureText(index) {
    const text = this.#procedures[index].getText();
    return `${index + 1}. ${text}`
  }

  // colorTheme を追加
  getColorTheme() {
    return this.#colorTheme;
  }
}