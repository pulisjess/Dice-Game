function randoming(){
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
document.querySelector("h1").style.fontSize = "5rem";
document.querySelector("h1").innerHTML = "🚩Player 1 has won this round";
document.querySelector("h1").style.color = "blue";
document.querySelectorAll(".dice p")[0].style.color = "blue";
document.querySelectorAll(".dice p")[1].style.color ="green";
}

else if(randomNumber2>randomNumber1){
document.querySelector("h1").style.fontSize = "5rem";
document.querySelector("h1").innerHTML = "Player 2 has won this round🚩";
document.querySelector("h1").style.color = "pink";
document.querySelectorAll(".dice p")[0].style.color = "green";
document.querySelectorAll(".dice p")[1].style.color ="pink";
}

else if(randomNumber1===randomNumber2){
document.querySelector("h1").innerHTML = "It's a draw <br> Roll again!"
document.querySelector("h1").style.fontSize = "5rem";
document.querySelector("h1").style.color = "red";
document.querySelectorAll(".dice p")[0].style.color = "red";
document.querySelectorAll(".dice p")[1].style.color = "red";
}

}
