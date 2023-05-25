const buttonContainerElement = document.getElementById("button-container");

// ボタンエレメントを作成
const button = document.createElement("button");

// ボタンの文字をセット
button.innerText = "Click Me";

// ボタンがクリックされた時の動作を設定
button.addEventListener("click", () => {
    console.log('Clicked');
});




// 他のエレメントにセットする
buttonContainerElement.appendChild(button);