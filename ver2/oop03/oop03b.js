// noinspection JSAnnotator

class Recipe {
  
  #name;
  #procedures;

  constructor(name, procedures) {
    this.#name = name;
    this.#procedures = procedures;
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
}

class Procedure {

  #text;

  constructor(text) {
    this.#text = text;
  }

  getText() {
    return this.#text;
  }
}

class ChickenRiceRecipe extends Recipe {
  constructor() {
    super("チキンライス", [
      new Procedure("ご飯を炊く"),
      new Procedure("チキンを炒める"),
      new Procedure("野菜を炒める"),
      new Procedure("ケチャップで炒める"),
      new Procedure("ご飯と混ぜる"),
    ]);
  }
}

class ConeSoupRecipe extends Recipe {
  constructor() {
    super("コーンスープ", [
      new Procedure("バターを溶かす"),
      new Procedure("玉ねぎを炒める"),
      new Procedure("コーンと水を加える"),
      new Procedure("塩コショウで味を整える"),
      new Procedure("スープが煮立ったら完成"),
    ]);
  }
}

class TeriyakiChickenRecipe extends Recipe {
  constructor() {
    super("照り焼きチキン", [
      new Procedure("鶏肉を一口大に切ります"),
      new Procedure("フライパンに油をひいて鶏肉を炒めます"),
      new Procedure("照り焼きソースを加えて炒めます"),
      new Procedure("鶏肉に火が通ったら完成です"),
    ]);
  }
}

new ChickenRiceRecipe();
new ConeSoupRecipe();
new TeriyakiChickenRecipe();


// では次に、これらを画面に表示することを考えてみる
//
