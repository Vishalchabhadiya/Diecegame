// First Dice
var number1 = Math.floor(Math.random() * 6) + 1 ;
var randomimage1 = "dice" + number1+".png";
var finalpath1 = "images/" + randomimage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", finalpath1);

// Second Dice

var number2 = Math.floor(Math.random() * 6) + 1;
var randomimage2 = "dice" + number2 + ".png";
var finalpath2 = "images/" + randomimage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", finalpath2);

if(number1 > number2)
{
   document.querySelector("h1").innerHTML = "Player 1 Win!!!";
}else if (number1 < number2)
{
    document.querySelector("h1").innerHTML = "Player 2 Win!!!";
}else {
    document.querySelector("h1").innerHTML = "Ghar Bhega Thav ne";
}
