class Recipe {

  name;
  procedures;

  constructor(name, procedures) {
    this.name = name;
    this.procedures = procedures;
  }
}

class Procedure {

  text;

  constructor(text) {
    this.text = text;
  }
}

const procedures = [
  new Procedure("ご飯を炊く"),
  new Procedure("チキンを炒める"),
  new Procedure("野菜を炒める"),
  new Procedure("ケチャップで炒める"),
  new Procedure("ご飯と混ぜる"),
];

const chickenRiceRecipe = new Recipe("チキンライス", procedures);



// ちょっと待ってみよう。チキンライスのインスタンスを作るときは、毎回こう書くのだろうか？
