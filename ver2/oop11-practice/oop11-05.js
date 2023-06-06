// Before

class Game {
  constructor() {
    // 中略
  }

  async start() {
    // 中略

    while (true) {
      const w02 = new MessageWindow("どの料理を作りますか");
      await w02.showText();

      const recipeButtons = [];
      for (let i = 0; i < this.recipes.length; i++) {
        const recipe = this.recipes[i];
        const button = new ChoiceButton(recipe.getName());
        recipeButtons.push(button);
      }

      // 中略

    }
  }
}


// After

class Game {

  // 中略

  async start() {
    // 中略

    while (true) {
      const w02 = new MessageWindow("どの料理を作りますか");
      await w02.showText();

      const recipeButtons = [];
      for (let i = 0; i < this.#recipes.length; i++) {
        const recipe = this.#recipes[i];
        const button = new ChoiceButton(recipe.getName(), recipe.getColorTheme());
        recipeButtons.push(button);
      }

      // 中略
    }
  }
}
