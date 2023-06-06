const buttonContainerElement = document.getElementById("button-container");

const button = document.createElement("button");

button.innerText = "Click me";

buttonContainerElement.appendChild(button);

const main = async () => {

    // resolve に値を渡すことができる
    const value = await new Promise((resolve) => {
        button.addEventListener("click", () => {
            resolve("クリックされました。");
        });
    });

    console.log(value);
}

main();



const main2 = async () => {
    
    // promise インスタンス
    const promise = new Promise((resolve) => {
        button.addEventListener("click", () => {
            resolve("クリックされました。");
        });
    });

    // await すると、一時中断し、 resolve すると値が渡る
    const value = await promise;

    console.log(value);
}
