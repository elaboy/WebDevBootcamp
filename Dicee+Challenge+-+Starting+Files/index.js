function randomNumberGenerator(){
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}
var leftDice = randomNumberGenerator();
var rightDice = randomNumberGenerator();

document.querySelector(".img1").setAttribute("src", "./images/dice"+leftDice+".png");
document.querySelector(".img2").setAttribute("src", "./images/dice"+rightDice+".png");

if(leftDice > rightDice){
    document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if(rightDice > leftDice){
    document.querySelector("h1").textContent = "Player 2 Wins!";
}
else if(rightDice === leftDice){
    document.querySelector("h1").textContent = "Draw!"
}
