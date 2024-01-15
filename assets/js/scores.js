
var scores=[];
function addScore(name,score){
    scores.push({ name :name, score: score});
}

let n = localStorage.getItem("userName");
let s = localStorage.getItem("score");
addScore(n,s)

var highScores=document.getElementById("highscores");
var highScoresEl=document.createElement("li");
highScores.appendChild(highScoresEl).textContent=(`${n} - ${s}`);


var clear=document.getElementById("clear");             //clearing screen click on the button;
clear.addEventListener("click",function(event){
    highScoresEl.textContent="";
});


