// const messageData の内容は messageData.js に記載してある

// const choiceData の内容は choiceData.js に記載してある

const textElement = document.getElementById("text");
const buttonContainerElement = document.getElementById("button-container");

const main = async () => {
  let messageId = "t01";
  
  while (true) {
    const currentMessageData = messageData[messageId];
    const currentMessage = currentMessageData.text;
  
    textElement.innerText = "";
    buttonContainerElement.innerHTML = "";
  
    for (let i = 0; i < currentMessage.length; i++) {
      textElement.innerText += currentMessage[i];
      await new Promise(resolve => setTimeout(resolve, 20));
    }
  
    const waitClickAnyButtons = []
  
    for (let i = 0; i < currentMessageData.choiceIds.length; i++) {
      const button = document.createElement("button");
      const choiceId = currentMessageData.choiceIds[i];
      const choice = choiceData[choiceId];
      button.innerText = choice.text;
      const waitClick = new Promise((resolve) => {
        button.addEventListener("click", () => {
          resolve(choice.target);
        });
      });
      waitClickAnyButtons.push(waitClick);
      buttonContainerElement.appendChild(button);
    }
  
    messageId = await Promise.race(waitClickAnyButtons);
  }
}

main();