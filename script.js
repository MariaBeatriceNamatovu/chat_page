const input = document.getElementById("input-field");
const button = document.getElementById("button-one");
const conversation = document.getElementById("conversation"); 
const logo = document.getElementById("left-arrow"); 

function createChat(message, username, isUser) {
  const chatDiv = document.createElement("div");
  
  const name = document.createElement("span");
  name.classList.add("name");
  name.textContent = username;
  chatDiv.appendChild(name);

  const msg = document.createElement("span");
  msg.innerText = message;
  chatDiv.appendChild(msg);

  if (isUser) {
    chatDiv.classList.add("user-message");
  } else {
    chatDiv.classList.add("operator-message");
  }

  conversation.appendChild(chatDiv);
}

const aiMessages = ["👋 Hi there! How can I help?", " No problem! Let me connect you to a customer support agent.", "what do you need?", "Hi there! I’m Hannah.", "I'm here to help! What do you need?"];
let count = 0;
let lastUser = "ChatBot";

function sendMessage() {
  logo.style.display = "none";
  createChat(input.value, "You:", true);
  setTimeout(() => {
    createChat(aiMessages[count], "ChatBot", false);
    count++;
  }, 3000);
}

button.addEventListener("click", sendMessage);
