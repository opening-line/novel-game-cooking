
// id="text" のエレメントを取得
const textElement = document.getElementById("text");

// エレメントの内部テキストを更新
textElement.innerText = "Hello World";

// エレメントの内部テキストを削除
textElement.innerText = "";



// id="button-container" のエレメントを取得
const buttonContainerElement = document.getElementById("button-container");

// エレメントの内部を削除
buttonContainerElement.innerHTML = "";



// ボタンエレメントを作成
const button = document.createElement("button");

// ボタンの文字をセット
button.innerText = "Click Me";

// 他のエレメントにセットする
buttonContainerElement.appendChild(button);