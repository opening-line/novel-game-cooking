import { ColorTheme } from "./ColorTheme.js";

class Recipe {

  #name;
  #procedures;
  #colorTheme;

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
    return `${index}.${text}`
  }

  getColorTheme() {
    return this.#colorTheme;
  }
}

export { Recipe };
