player1=localStorage.getItem("user name 1");
player2=localStorage.getItem("user name 2");

player1_score = 0;
player2_score = 0;

document.getElementById('1').innerHTML=player1 + " : ";
document.getElementById('2').innerHTML=player2 + " : ";

document.getElementById('1score').innerHTML = player1_score;
document.getElementById('2score').innerHTML = player2_score;

document.getElementById("question").innerHTML="Question Turn: " + player1;
document.getElementById("Answer").innerHTML="Answer Turn: " + player2;

