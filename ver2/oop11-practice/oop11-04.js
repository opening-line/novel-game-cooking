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


class ChickenRiceRecipe extends Recipe {
  constructor() {
    super(
      "チキンライス",
      [
        // 中略
      ],
     ColorTheme.JUICY
    );
  }
}

class TeriyakiChickenRecipe extends Recipe {
  constructor() {
    super(
      "照り焼きチキン",
      [
        // 中略
      ],
      ColorTheme.SPICY
    );
  }
}

class ConeSoupRecipe extends Recipe {
  constructor() {
    super(
      "コーンスープ",
      [
        // 中略
      ],
      ColorTheme.SWEET
    );
  }
}


// Recipeクラスとそのサブクラスなら、getColorThemeで保持している色を取得できる

function sampleFunction(recipeSubClass) {

  console.log(recipeSubClass.getColorTheme());

}

// recipeSubClass が ChickenRiceRecipe / TeriyakiChickenRecipe / ConeSoupRecipe かは意識しなくていい
// →ポリモーフィズム