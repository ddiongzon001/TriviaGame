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

//timer variables



//Define functions
//function to show the answer
function answer(){

    //if user guesses it right
    // if()
    startButtonDisplay.text("");
    timeDisplay.text("Time remaining left: ");
    questionDisplay.text("ANSWER TIME");
    console.log(questionDisplay);
    answerDisplay.text("");

    //if user guesses it wrong

}

//function to show the questions
function questions(){

    //timer
    var time = 10;
    // setTimeout(answer, 1000*10);

    //display of questions & answers
    startButtonDisplay.text("");
    timeDisplay.text("Time remaining left: ");
    questionDisplay.text(test.question1.question);
    for(var i=0; i<4; i++){
        answerDisplay.append("<h5 id=answer" + i + ">" + test.question1.choices[i] + "</h5>");
    }

    //show the answer page
    if(test.question1.answer == test.question1.choices[2]){
        $("#answer2").on("click",answer);
    }


}

//function to show the start button
function start(){
    startButtonDisplay.html("<button type='button' class='btn btn-danger' id='start'>START</button>");
    $("#start").on("click", questions)
}

//Main game sections
start();