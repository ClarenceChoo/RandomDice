const maxNum = 6;
const minNum = 1; 
let randomNumber1 = Math.floor(Math.random() * maxNum) + 1;
let randomNumber2 = Math.floor(Math.random() * maxNum) + 1;


switch(randomNumber1){
    case 1:
        document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
        break;
    case 6:
        document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
        break;
}

switch(randomNumber2){
    case 1:
        document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
        break;
    case 6:
        document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
        break;
}

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent=("🚩 Player 1 wins!");
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent=("Player 2 wins! 🚩");
}
else {
    document.querySelector("h1").textContent=("Draw!");
}