var startScreen=document.getElementById("start-screen");
var questionTitle=document.getElementById("question-title");
var question=document.querySelector(".hide"); 
var choices=document.getElementById("choices"); 
var timeEl = document.querySelector(".timer");
var secondsLeft = 30;
var index;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent=secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }

function cleaner(){           //clean the screen
    startScreen.textContent="";
}
  
function QuestionRender(){         //display questions on the screen 
    index=0;
    question.style.display="block";     //make questions visible(they are hidden in the html)
    questionTitle.textContent=Questions[0].Q;
    choices.textContent={
        A: Questions[0].A,
        B: Questions[0].B,
        C: Questions[0].C,    
        };
        
    } 

document.getElementById("start").addEventListener("click",function(event){
    cleaner();
    setTime();
    QuestionRender();

});
