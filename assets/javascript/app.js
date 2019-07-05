//Define variables
var test = {
    question1: {
        question: "Who hides eggs on a Sunday?",
        choices: ["Nesquik Bunny", "Bugs Bunny", "The Easter Bunny", "The White Rabbit"],
        answer: "The Easter Bunny"
    }
}

//HTML display variables
var startButtonDisplay = $("#button");
var timeDisplay = $("#time");
var questionDisplay = $("#question");
var answerDisplay = $("#answers");


//Define functions
//function to show the questions
function questions(){
    startButtonDisplay.text("");
    timeDisplay.text("Time remaining left: ");
    questionDisplay.text(test.question1.question);
    for(var i=0; i<4; i++){
        answerDisplay.append("<h5>" + test.question1.choices[i] + "</h5>");
    }
}

//function to show the start button
function start(){
    startButtonDisplay.html("<button type='button' class='btn btn-danger' id='start'>START</button>");
    $("#start").on("click", function(){
        questions();
    });
}

//Main game sections
start();