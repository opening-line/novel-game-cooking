async function animateMessage(message, element) {
  for (let i = 0; i < message.length; i++) {
    element.innerText += message[i];
    await new Promise(resolve => setTimeout(resolve, 20));
  }
}
