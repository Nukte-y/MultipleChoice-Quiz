
var startScreen=document.getElementById("start-screen");
var endScreen=document.getElementById("end-screen");
var questionTitle=document.getElementById("question-title");
var question=document.getElementById("questions");
var choices=document.getElementById("choices"); 
var timeEl = document.querySelector(".timer");
var secondsLeft = 60;
var index=0;
var correct=0;  
var incorrect=0;
var correctSound=document.createElement("audio")
correctSound.setAttribute("src","./assets/sfx/correct.wav");   
var incorrectSound=document.createElement("audio")
incorrectSound.setAttribute("src","./assets/sfx/incorrect.wav");
var finalScore=document.getElementById("final-score");
var feedback=document.getElementById("feedback");
var initials=document.getElementById("initials");

document.body.appendChild(correctSound);
document.body.appendChild(incorrectSound);

function setTime() {                
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent=secondsLeft;
        if(secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            timeEl.textContent=0;
            cleaner(question);
            block(endScreen);

        }

    }, 500)
};

function feedbackTimer(){                       //after 0.8sec will clear feedback(correct or wrong)
    var ftimer = setInterval(function() {
            cleaner(feedback);
            clearInterval(ftimer);
        }, 800)                                
    
}

function cleaner(element){           //clean the screen
    element.textContent="";
};


function block(element){             //make elements visible
    element.style.display="block";
};

function buttonClick(event){  
    var Select=event.target.id;      //get id of the clicked button
    block(feedback);    
    if(Select===Questions[index].correctAnswer){
        correct++;
        correctSound.play();
        feedback.textContent="CORRECT";
    }
    else{
        incorrect++;
        incorrectSound.play();
        feedback.textContent="WRONG";
        secondsLeft=secondsLeft-5;
    };
    
    index++;
    choices=document.getElementById("choices");
    cleaner(choices);              // to clean previous answer buttons  
    feedbackTimer();                
    if(index===4){                  // if it is last question
        cleaner(question);                        
        block(endScreen);
        finalScore.textContent=correct;
        secondsLeft=0;
        return;
    }
    questionRender();
};


function questionRender(){           //display questions on the screen 
    
block(questions);                //make questions visible(they are hidden in the html)
questionTitle.textContent=Questions[index].Q;   
var answers=Questions[index].Answers;   //takes answers object, from questions array 
    
    for (const key in answers) {            //loop inside the object
        var button=choices.appendChild(document.createElement("button"));   //create buttons under choices, for each object keys    
        button.textContent=answers[key];
        button.id = key;                                                    //define id to track buttons when user click
        button.addEventListener("click",buttonClick);                            
    }
} 

document.getElementById("start").addEventListener("click",function(event){          //start click
    event.preventDefault();    
    cleaner(startScreen);
    setTime();
    questionRender();
});

document.getElementById("submit").addEventListener("click",function (event) {       // takes initials when click on submit button
    event.preventDefault();
    var userName=initials.value.trim();
    localStorage.setItem("userName", userName)                                      //putting input values into localstorage
    localStorage.setItem("score", correct)
    window.location.href="./highscores.html";                                       //change to highscore html file

})

