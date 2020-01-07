let p1Button = document.getElementById("p1");
let p2Button = document.getElementById("p2");
let p1Display = document.getElementById("display1");
let p2Display = document.getElementById("display2");
let resetButton = document.getElementById("reset");
let inputNum = document.querySelector("input");
let winningScoreDisplay = document.querySelector("p span");

let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;


p1Button.addEventListener('click',function(){
  if(!gameOver){p1Score ++;
    if(p1Score === winningScore){gameOver = true;}
    p1Display.textContent = p1Score;}})


p2Button.addEventListener('click', function(){
  if(!gameOver){p2Score ++;
    if(p2Score === winningScore){gameOver = true;}
    p2Display.textContent = p2Score;}
})

resetButton.addEventListener('click', function() {
p1Score = 0;
p2Score = 0;
p1Display.textContent = 0;
p2Display.textContent = 0;
gameOver = false;
})

inputNum.addEventListener('change', function(){
winningScoreDisplay = Number(inputNum.value);
})
