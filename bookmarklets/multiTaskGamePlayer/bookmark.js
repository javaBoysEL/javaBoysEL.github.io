document.getElementById("bookmark").href = `
javascript:const gamePlayer = document.createElement("div");
gamePlayer.id = "gamePlayer";
const gamePlayTitle = document.createElement("h2");
gamePlayTitle.textContent = "Multi Task Game Player";
gamePlayTitle.className = "gamePlayerT";
const gamePlayFrameWrap = document.createElement("div");
gamePlayFrameWrap.align = "center";
const gamePlayFrame = document.createElement("iframe");
gamePlayFrame.src = "about:blank";
gamePlayFrame.allowFullscreen = true;
gamePlayFrame.id = "gamePlayFrame";
const gameInsertWrap = document.createElement("div");
gameInsertWrap.align = "center";
const gameInsertWrapp = document.createElement("p");
const gamePlayInsert = document.createElement("input");
gamePlayInsert.type = "url";
gamePlayInsert.className = "gamePlayInsert";
const gamePlaySubmit = document.createElement("input");
gamePlaySubmit.type = "submit";
gamePlaySubmit.className = "gamePlayInsert";
gamePlaySubmit.value = "Insert";
gamePlaySubmit.onclick = function() {
gamePlayFrame.src = gamePlayInsert.value;
}
const gamePlayerCredits = document.createElement("h5");
gamePlayerCredits.textContent = "javaboysel.github.io";
gamePlayerCredits.className = "gamePlayerT";

const STYLE = document.createElement("STYLE");
STYLE.innerHTML = "
#gamePlayer {
background-color: black;
color: white;
font-family: Monospace;
text-align: center;
position: fixed;
top: 0;
right: 0;
height: 48%;
width: 25%;
z-index: 9229292929384849949399282828293939;
}
.gamePlayerT {
color: white;
font-family: Monospace;
text-align: center;
}
#gamePlayFrame {
width: 100%;
height: 70%;
}
.gamePlayInsert {
background-color: gray;
color: white;
font-family: Monospace;
}
";
document.body.appendChild(gamePlayer);
gamePlayer.appendChild(gamePlayTitle);
gamePlayer.appendChild(gamePlayFrameWrap);
gamePlayFrameWrap.appendChild(gamePlayFrame);
gamePlayer.appendChild(gameInsertWrap);
gameInsertWrap.appendChild(gameInsertWrapp);
gameInsertWrapp.appendChild(gamePlayInsert);
gameInsertWrapp.appendChild(gamePlaySubmit);
gamePlayer.appendChild(gamePlayerCredits);

document.head.appendChild(STYLE);

// Call completion to finish
completion();
`;
