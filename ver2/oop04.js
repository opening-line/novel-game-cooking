// noinspection JSAnnotator

// 非オブジェクト指向で、ブラウザ画面を操作していたコード

const messageElement = document.getElementById("text");
const choicesContainer = document.getElementById("button-container");

messageElement.innerText = "";
choicesContainer.innerHTML = "";

messageElement.innerText += currentMessage[i];

const button = document.createElement("button");
button.innerText = choice.text;
button.addEventListener("click", () => {});
choicesContainer.appendChild(button);


// カプセル化しよう

class MessageWindow {

  #messageElement;
  #message;

  constructor(message) {
    this.#messageElement = document.getElementById("text");
    this.#message = message
  }

  /**
   * @returns {Promise<void>}
   */
  async showText() {
    this.#messageElement.innerText = "";
    for (let i = 0; i < this.#message.length; i++) {
      this.#messageElement.innerText += this.#message[i];
      await new Promise(resolve => setTimeout(resolve, 20));
    }
  }
}


const messageWindow = new MessageWindow("表示するメッセージです。");

const main1 = async () => {

  // メッセージが表示し終わるまで待機
  await messageWindow.showText();

  // 続きの処理
}




class ChoicesContainer {

  #choicesContainer;
  #buttons;

  /**
   *
   * @param {ChoiceButton} buttons
   */
  constructor(...buttons) {
    this.#choicesContainer = document.getElementById("button-container");
    this.#buttons = buttons;
    for (let button of this.#buttons) {
      this.#choicesContainer.appendChild(button.toDomElement());
    }
  }

  /**
   *
   * @returns {Promise<number>}
   */
  async waitClickAny() {
    const waitClickAnyButtons = []
    for (let i = 0; i < this.#buttons.length; i++) {
      const waitClick = this.#buttons[i].waitClick(i)
      waitClickAnyButtons.push(waitClick)
    }
    
    return await Promise.any(waitClickAnyButtons);
  }

  clear() {
    this.#choicesContainer.innerHTML = "";
  }
}



const choicesContainer = new ChoicesContainer(new ChoiceButton("ボタン１"), new ChoiceButton("ボタン２"));

const main2 = async () => {
  const clickedIndex = await choicesContainer.waitClickAny();
  console.log(clickedIndex);
  choicesContainer.clear();
}



class ChoiceButton {

  #button;

  constructor(text) {
    this.#button = document.createElement("button");
    this.#button.innerText = text;
  }

  waitClick(index) {
    return new Promise((resolve) => {
      this.#button.addEventListener("click", () => {
        resolve(index);
      });
    });
  }

  toDomElement() {
    return this.#button;
  }
}


const button = new ChoiceButton("ボタンの中に表示するテキスト");

const main3 = async () => {
  await button.waitClick();
}