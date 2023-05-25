const buttonContainerElement = document.getElementById("button-container");

const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");

button1.innerText = "Click me 1";
button2.innerText = "Click me 2";
button3.innerText = "Click me 3";

buttonContainerElement.appendChild(button1);
buttonContainerElement.appendChild(button2);
buttonContainerElement.appendChild(button3);


const main = async () => {
    
    // promise インスタンス
    const promise1 = new Promise((resolve) => {
        button1.addEventListener("click", () => {
            resolve(1);
        });
    });
    const promise2 = new Promise((resolve) => {
        button2.addEventListener("click", () => {
            resolve(2);
        });
    });
    const promise3 = new Promise((resolve) => {
        button3.addEventListener("click", () => {
            resolve(3);
        });
    });

    // どれか１つの promise が resolve すると処理が進む
    const value = await Promise.race([promise1, promise2, promise3]);

    console.log(value);
}

main();


