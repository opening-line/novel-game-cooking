// noinspection JSAnnotator

// Sampleを参考にして、RecipeとProcedureのゲッターを書いてください

class Sample {

  #field1;

  constructor(field1) {
    this.#field1 = field1;
  }

  getField() {
    return this.#field1;
  }
}



class Recipe {

  #name;
  #procedure;

  constructor(name, procedures) {
    this.#name = name;
    this.#procedures = procedures;
  }
}

class Procedure {

  #text;

  constructor(text) {
    this.#text = text;
  }
}