class Step {
  constructor(text, choices) {
    this.text = text;
    this.choices = choices;
  }
}

const startStep = new Step("ゲームを始めるにはボタンを押してください。", [
  { text: "始める", nextScene: 1 },
]);

const chooseRecipeStep = new Step("どの料理を作りますか？", [
  { text: "チキンライス", nextScene: 2 },
  { text: "コーンスープ", nextScene: 7 },
  { text: "照り焼きチキン", nextScene: 12 },
]);

class CookingGame {
  constructor(textElement, choicesContainer) {
    this.textElement = textElement;
    this.choicesContainer = choicesContainer;
    this.currentScene = 0;
  }

  initScenes() {
    this.scenes = [
      startStep,
      chooseRecipeStep,
      ...this.chickenRiceScenes(),
      ...this.cornSoupScenes(),
      ...this.teriyakiChickenScenes(),
    ];
  }

  chickenRiceScenes() {
    return [
      new Step("1. ご飯を炊く", 3),
      new Step("2. チキンを炒める", 4),
      new Step("3. 野菜を炒める", 5),
      new Step("4. ケチャップで炒める", 6),
      new Step("5. ご飯と混ぜる", 1),
    ];
  }

  cornSoupScenes() {
    return [
      new Step("1. バターを溶かす", 8),
      new Step("2. 玉ねぎを炒める", 9),
      new Step("3. コーンと水を加える", 10),
      new Step("4. 塩コショウで味を整える", 11),
      new Step("5. スープが煮立ったら完成", 1),
    ];
  }

  teriyakiChickenScenes() {
    return [
      new Step("1. 鶏肉を一口大に切ります。", 13),
      new Step("2. フライパンに油をひいて鶏肉を炒めます。", 14),
      new Step("3. 照り焼きソースを加えて炒めます。", 15),
      new Step("4. 鶏肉に火が通ったら完成です！", 1),
    ];
  }

  showScene(sceneIndex) {
    const scene = this.scenes[sceneIndex];
    this.textElement.innerText = scene.text;
    this.choicesContainer.innerHTML = "";

    scene.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.innerText = choice.text;
      button.addEventListener("click", () => {
        this.showScene(choice.nextScene);
      });
      this.choicesContainer.appendChild(button);
    });
  }

  start() {
    this.initScenes();
    this.showScene(this.currentScene);
  }
}

const textElement = document.getElementById("text");
const choicesContainer = document.getElementById("choices-container");
const game = new CookingGame(textElement, choicesContainer);
game.start();
