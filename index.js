var randomNumber1=Math.floor(Math.random()*6)+1;
var imageName1="dice"+randomNumber1+".png";
var imageSource1="images/"+imageName1;

document.querySelector("img.img1").setAttribute("src",imageSource1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var imageName2="dice"+randomNumber2+".png";
var imageSource2="images/"+imageName2;

document.querySelector("img.img2").setAttribute("src",imageSource2);

if (randomNumber1>randomNumber2)
   {document.querySelector("h1").innerHTML="🚩Player1 Wins!";
}else if(randomNumber1<randomNumber2)
   {document.querySelector("h1").innerHTML="Player2 Wins!🚩";}
else
   {document.querySelector("h1").innerHTML="Draw!";}
