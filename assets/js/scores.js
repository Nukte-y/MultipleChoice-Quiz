
// var scores=[]; 
//each time page refresh(js refresh as well) I lost my array elements stored before, 
// so I will store them in localstorage and get them from there

var storedString=localStorage.getItem("storedScoresArray");
var scores=[];                                                         //array which will store scores
if(storedString!==null){                                               //because got error when array is empthy at first and could not parse it
    var scores=JSON.parse(storedString);
};

function addScore(name,score){                                          // function to add new scores to scores array and keep it in localstorage
    scores.push({ name :name, score: score});                              
    let arraytoString=JSON.stringify(scores);                           //converting array to string to store it in local storage    
    localStorage.setItem("storedScoresArray",arraytoString);            //send array(as string) with key "storedScoresArray" key to my localstorage
};

var n = localStorage.getItem("userName");                               //get scores which I store in localstorage(in logic.js) at the end of quiz
var s = localStorage.getItem("score");
addScore(n,s);                                                          //call the function

var highScores=document.getElementById("highscores");                  // printing highscore on the page
for(i=0;i<scores.length;i++){
var highScoresEl=highScores.appendChild(document.createElement("li"));  
highScoresEl.textContent=(`${scores[i].name} - ${scores[i].score}`);    //printing scores stored in LocalStore array                            
}

var clear=document.getElementById("clear");                             //clearing highscore when click on button;
clear.addEventListener("click",function(event){
    highScoresEl.textContent="";
});





