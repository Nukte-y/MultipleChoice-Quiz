var startScreen=document.getElementById("start-screen");
var endScreen=document.getElementById("end-screen");
var questionTitle=document.getElementById("question-title");
var question=document.getElementById("questions");
var choices=document.getElementById("choices"); 
var timeEl = document.querySelector(".timer");
var secondsLeft = 30;
var index=0;
var correct=0;  
var wrong=0;
var correctSound=(document.createElement("AUDIO").setAttribute("src","./assets/sfx/correct.wav"));   
var incorrectSound=document.createElement("AUDIO");



function setTime() {                
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent=secondsLeft;
  
        if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
        }
    }, 1000)
};


function cleaner(element){           //clean the screen
    element.textContent="";
};


function block(element){             //make elements visible
    element.style.display="block";   
};


function Button(event){  

    var Select=event.target.id;     //get id of the clicked button    
    if(Select===Questions[index].correctAnswer){
        correct++;
        // correctSound.play();
    }
    else{

    };
    
    index++;
    choices=document.getElementById("choices");
    cleaner(choices);               // to clean previous answer buttons  
    if(index===4){                  // if it is last question
        cleaner(question);                        
        block(endScreen);
        return;
    }
    
    QuestionRender();
};


function QuestionRender(){         //display questions on the screen 

    block(questions);                //make questions visible(they are hidden in the html)
    questionTitle.textContent=Questions[index].Q;
        
    var answers=Questions[index].Answers;   //takes answers object, from questions array 
    for (const key in answers) {        //loop inside the object
        var button=choices.appendChild(document.createElement("button"));   //create button under question div, for each object element    
        button.textContent=answers[key];
        button.id = key;
        button.addEventListener("click",Button);
    }        
} 

document.getElementById("start").addEventListener("click",function(event){          //start click
    event.preventDefault();    
    cleaner(startScreen);
    setTime();
    QuestionRender();

});
