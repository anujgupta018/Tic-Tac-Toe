console.log("Tic tac toe");
console.log("hello there");
let audioTurn = new Audio("ting.mp3");
let celeb = new Audio("celeb.mp3");
let turn = "X";
let gameover = false;
// Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};
// Function to check win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";
      gameover = true;
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "200px";
    }
  });
};

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!gameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});
// add on click listener to reset button
let reset = document.getElementById("reset");
reset.addEventListener("click", (element) => {
  document.getElementsByTagName("img")[0].style.width = "0";
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  gameover = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
});
