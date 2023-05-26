// Before

class Recipe {

  #name;
  #procedures;

  constructor(name, procedures) {
    this.#name = name;
    this.#procedures = procedures;
  }

  // 中略
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
