document.getElementById("bookmark").href = `
javascript:const botopener = document.createElement("img");
botopener.style.zIndex = 999999999;
botopener.width = 50;
botopener.height = 50;
botopener.src = "https://raw.githubusercontent.com/javaBoysEL/assets/refs/heads/main/bot.jpeg";
botopener.style.position = "fixed";
botopener.style.top = "50px";
botopener.style.right = "50px";
let botOpened = false;
botopener.onclick = function() {
if (botOpened === true) {
botBoard.remove();
botOpened = false;
} else if (botOpened === false) {
document.body.appendChild(botBoard);
botBoard.appendChild(botTitle);
botBoard.appendChild(botInputS1);
botInputS1.appendChild(botInputS1prompt);
botInputS1.appendChild(botInputS1input);
botBoard.appendChild(botInputS2);
botInputS2.appendChild(botInputS2prompt);
botInputS2.appendChild(botInputS2input);
botBoard.appendChild(bot);
botOpened = true;
}
};
const botBoard = document.createElement("div");
botBoard.style.width = "42%";
botBoard.style.height = "59%";
botBoard.style.position = "fixed";
botBoard.style.bottom = "20px";
botBoard.style.right = "20px";
botBoard.style.backgroundColor = "black";
botBoard.style.fontFamily = "Courier New";
botBoard.style.color = "white";
botBoard.style.fontWeight = "bold";
botBoard.align = "center";
const botTitle = document.createElement("h1");
botTitle.style.fontSize = "50px";
botTitle.textContent = "J.S.S.B";
botTitle.style.color = "white";
botTitle.style.fontFamily = "Courier New";
botTitle.style.fontWeight = "bold";
const botInputS1 = document.createElement("p");
const botInputS1prompt = document.createElement("h3");
botInputS1prompt.textContent = "Input ID : ";
botInputS1prompt.style.color = "white";
botInputS1prompt.style.fontFamily = "Courier New";
botInputS1prompt.style.fontWeight = "bold";
const botInputS1input = document.createElement("input");
botInputS1input.style.backgroundColor = "gray";
botInputS1input.style.color = "white";
botInputS1input.style.fontFamily = "Courier New";
botInputS1input.style.fontWeight = "bold";
const botInputS2 = document.createElement("p");
const botInputS2prompt = document.createElement("h3");
botInputS2prompt.textContent = "Submit Function : ";
botInputS2prompt.style.color = "white";
botInputS2prompt.style.fontFamily = "Courier New";
botInputS2prompt.style.fontWeight = "bold";
const botInputS2input = document.createElement("input");
botInputS2input.style.color = "white";
botInputS2input.style.fontFamily = "Courier New";
botInputS2input.style.fontWeight = "bold";
botInputS2input.style.backgroundColor = "gray";
const bot = document.createElement("input");
bot.type = "submit";
bot.style.backgroundColor = "gray";
bot.style.color = "white";
bot.style.fontFamily = "Courier New";
bot.style.fontWeight = "bold";
bot.value = "Start Bot";
bot.onclick = function() {botActivation();}

function botActivation() {
var element = document.getElementById(botInputS1input.value);
if (element === null) {
alert("Element does not exist.");
} else {
var value = Math.floor(Math.random() * 2889298178172839);
element.value = value;
eval(botInputS2input.value);
setInterval(botActivation, 50);
}
}
document.body.appendChild(botopener);

// Call completion to finish
completion();
`;
