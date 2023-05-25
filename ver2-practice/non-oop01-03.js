const textElement = document.getElementById("text");


// async 関数で囲むと await が使えるようになる
const main = async () => {

    for (let i = 0; i < 100; i++) {

        // 文字を追記
        textElement.innerText += "あ";

        // 100ミリ秒待機するコードを書いてください。
        
        
    }

}

main();