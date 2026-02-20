document.getElementById("bookmark").href = `
javascript:function generateP() {
var virus = document.createElement("div");
virus.style.position = "fixed";
virus.style.zIndex = Math.floor(Math.random() * 99999999);
virus.style.height = "256";
virus.style.width = "500px";
virus.style.backgroundColor = "gray";
virus.align = "center";
var virusAlert = document.createElement("h1");
virusAlert.style.fontFamily = "Courier New";
virusAlert.style.color = "white";
virusAlert.style.textAlign = "center";
virusAlert.textContent = "Virus Detected!";
var pug = document.createElement("img");
pug.src = "https://raw.githubusercontent.com/javaBoysEL/assets/refs/heads/main/pug.GIF";
pug.style.width = "100px";
pug.style.height = "100px";
var virusIn = document.createElement("h5");
virusIn.style.fontFamily = "Courier New";
virusIn.style.color = "white";
virusIn.textContent = "For your safety, turn on Anti Virus applications.";
var virusOk = document.createElement("button");
virusOk.style.backgroundColor = "gray";
virusOk.style.color = "white";
virusOk.style.fontFamily = "Courier New";
virusOk.style.fontWeight = "bold";
virusOk.textContent = "OK";
virusOk.onclick = function() {
virus.remove();
}
var x = Math.floor(Math.random() * 10000 - 1000);
var y = Math.floor(Math.random() * 10000 - 1000);
virus.style.top = x + "px";
virus.style.right = y + "px";
document.body.appendChild(virus);
virus.appendChild(virusAlert);
virus.appendChild(pug);
virus.appendChild(virusIn);
virus.appendChild(virusOk);
}

setInterval(generateP, 1);

// Call completion to finish
completion();
`;
