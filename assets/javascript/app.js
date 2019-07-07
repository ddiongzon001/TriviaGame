//Define variables
var test = [{
        question: "Who hides eggs on a Sunday?",
        choices: ["Br'er Rabbit", "Bugs Bunny", "The Easter Bunny", "The White Rabbit"],
        answer: "The Easter Bunny"
    },
    {
        question: "He's late for a very important date",
        choices: ["Lola Bunny", "Judy Hopps", "Thumper", "The White Rabbit"],
        answer: "The White Rabbit"
    },
    {
        question: "Who framed _______?",
        choices: ["Bunnicula", "Little Bunny Foo Foo", "Cadbury Bunny", "Roger Rabbit"],
        answer: "Roger Rabbit"
    },
    {
        question: "Arthur's postcard sending friend",
        choices: ["Buster", "Rabbit", "Peter Cottontail", "Velveteen Rabbit"],
        answer: "Buster"
    },
    {
        question: "________ are for kids! Silly rabbit!",
        choices: ["Energizer Bunny", "Trix Rabbit", "Nesquik Bunny", "Peter Rabbit"],
        answer: "Trix Rabbit"
    }
];

var questionCount = 0;

//HTML display variables
var startButtonDisplay = $("#button");
var timeDisplay = $("#time");
var questionDisplay = $("#question");
var answerDisplay = $("#answers");

//timer variables



//Define functions
//function to show the user was right
function right() {
    startButtonDisplay.text("");
    timeDisplay.text("Time remaining left: ");
    questionDisplay.text("RIGHT ANSWER");
    answerDisplay.text("");

    questionCount++;

    setTimeout(questions, 1000);

}

//function to show the user was wrong
function wrong() {
    startButtonDisplay.text("");
    timeDisplay.text("Time remaining left: ");
    questionDisplay.text("WRONG ANSWER");
    answerDisplay.text("");

    questionCount++;

    setTimeout(questions, 1000);
}

//shows when the user times out of the question
function timeOut() {

}

function countPage(){
    
}

//function to show the questions
function questions() {

    //timer
    var time = 10;
    setTimeout(timeOut, 1000 * 10);

    //display of questions & answers
    if (questionCount < test.length) {

        //restarts the variables
        answerCorrect = "";
        answerIncorrect = "";

        //hides the button
        startButtonDisplay.text("");

        //display the time for the question
        timeDisplay.text("Time remaining left: ");

        //displays the question
        questionDisplay.text(test[questionCount].question);

        //displays each choice
        for (var i = 0; i < 4; i++) {
            answerDisplay.append("<h5 id=answer" + i + ">" + test[questionCount].choices[i] + "</h5>");
        }

        //shows the answer page if you select the wrong answer
        if (test[questionCount].answer != test[questionCount].choices[1] &&
            test[questionCount].answer != test[questionCount].choices[2] &&
            test[questionCount].answer != test[questionCount].choices[3]) {
            console.log("went through 0");
            answerIncorrect = true;
            $("#answer1").on("click", wrong);
            $("#answer2").on("click", wrong);
            $("#answer3").on("click", wrong);

            //shows the answer page if you select the right answer
            if (test[questionCount].answer == test[questionCount].choices[0]) {
                answerCorrect = true;
                $("#answer0").on("click", right);
            }

        } else if (test[questionCount].answer != test[questionCount].choices[0] &&
            test[questionCount].answer != test[questionCount].choices[2] &&
            test[questionCount].answer != test[questionCount].choices[3]) {
            console.log("went through 1");
            answerIncorrect = true;
            $("#answer0").on("click", wrong);
            $("#answer2").on("click", wrong);
            $("#answer3").on("click", wrong);

            if (test[questionCount].answer == test[questionCount].choices[1]) {
                answerCorrect = true;
                $("#answer1").on("click", right);
            }

        } else if (test[questionCount].answer != test[questionCount].choices[0] &&
            test[questionCount].answer != test[questionCount].choices[1] &&
            test[questionCount].answer != test[questionCount].choices[3]) {
            console.log("went through 2");
            // answerIncorrect = true;
            $("#answer0").on("click", wrong);
            $("#answer1").on("click", wrong);
            $("#answer3").on("click", wrong);

            if (test[questionCount].answer == test[questionCount].choices[2]) {
                // answerCorrect = true;
                $("#answer2").on("click", right);

            }
        } else if (test[questionCount].answer != test[questionCount].choices[0] &&
            test[questionCount].answer != test[questionCount].choices[1] &&
            test[questionCount].answer != test[questionCount].choices[2]) {
            console.log("went through 3");
            answerIncorrect = true;
            $("#answer0").on("click", wrong);
            $("#answer1").on("click", wrong);
            $("#answer2").on("click", wrong);

            if (test[questionCount].answer == test[questionCount].choices[3]) {
                answerCorrect = true;
                $("#answer3").on("click", right);
            }

        }

    }
    else{
        countPage();
    }
}

//function to show the start button
function start() {
    startButtonDisplay.html("<button type='button' class='btn btn-danger' id='start'>START</button>");
    $("#start").on("click", questions)
}

//Main game sections
start();