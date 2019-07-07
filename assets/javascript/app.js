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

//count variables
var questionCount = 0;
var right = 0;
var wrong = 0;
var unanswered = 0;

//HTML display variables
var startButtonDisplay = $("#button");
var timeDisplay = $("#time");
var questionDisplay = $("#question");
var answerDisplay = $("#answers");

//timer variables
var seconds;
var interval;


//Define functions
//function for count
function countDown() {
    seconds--;

    timeDisplay.text("Time remaining left: " + seconds + " seconds");

    if (seconds === 0) {
        timeOut();
    }
}

//function to show the user was right
function rightAnswer() {

    console.log("went through right");

    clearInterval(interval);

    timeDisplay.text("Time remaining left: " + seconds + " seconds");
    questionDisplay.text("RIGHT ANSWER");
    answerDisplay.text("");

    questionCount++;
    right++;
    // seconds = 6;

    setTimeout(questions, 1000);

}

//function to show the user was wrong
function wrongAnswer() {

    console.log("went through wrong");

    clearInterval(interval);

    timeDisplay.text("Time remaining left: " + seconds + " seconds");
    questionDisplay.text("WRONG ANSWER");
    answerDisplay.text("");

    questionCount++;
    wrong++;
    // seconds = 6;

    setTimeout(questions, 1000);
}

//shows when the user times out of the question
function timeOut() {
    console.log("went through timeOut");

    clearInterval(interval);

    timeDisplay.text("Time remaining left: 0 seconds");
    questionDisplay.text("RAN OUT OF TIME");
    answerDisplay.text("");

    questionCount++;
    unanswered++;
    // seconds = 6;

    setTimeout(questions, 1000);
}

//shows the user the count of what they got wrong/right/unanswered and shows replay again button
function countPage() {
    console.log("went through countPage");

    timeDisplay.text("Time remaining left: " + seconds + " seconds");
    questionDisplay.text("Test Done! Here is how you did:");
    answerDisplay.append("<p>Correct Answer: " + right + "</p>");
    answerDisplay.append("<p>Incorrect Answer: " + wrong + "</p>");
    answerDisplay.append("<p>Unanswered Answer: " + unanswered + "</p>");

    //restart the variables
    questionCount = 0;
    right = 0;
    wrong = 0;
    unanswered = 0;

    //play again button
    startButtonDisplay.html("<button type='button' class='btn btn-danger' id='again'>PLAY AGAIN?</button>");
    $("#again").on("click", questions)

}

//function to show the questions
function questions() {

    console.log("went through question");

    //display of questions & answers
    if (questionCount < test.length) {

        //restarts the variables
        answerCorrect = "";
        answerIncorrect = "";

        //hides the button
        startButtonDisplay.text("");

        //display the time for the question
        seconds = 6;
        timeDisplay.text("Time remaining left: " + seconds + " seconds");
        interval = setInterval(countDown, 1000) //remember to change this later!
        answerDisplay.text("");

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

            $("#answer0").on("click", rightAnswer);
            $("#answer1").on("click", wrongAnswer);
            $("#answer2").on("click", wrongAnswer);
            $("#answer3").on("click", wrongAnswer);


        } else if (test[questionCount].answer != test[questionCount].choices[0] &&
            test[questionCount].answer != test[questionCount].choices[2] &&
            test[questionCount].answer != test[questionCount].choices[3]) {
            console.log("went through 1");

            $("#answer0").on("click", wrongAnswer);
            $("#answer1").on("click", rightAnswer);
            $("#answer2").on("click", wrongAnswer);
            $("#answer3").on("click", wrongAnswer);

        } else if (test[questionCount].answer != test[questionCount].choices[0] &&
            test[questionCount].answer != test[questionCount].choices[1] &&
            test[questionCount].answer != test[questionCount].choices[3]) {
            console.log("went through 2");

            $("#answer0").on("click", wrongAnswer);
            $("#answer1").on("click", wrongAnswer);
            $("#answer2").on("click", rightAnswer);
            $("#answer3").on("click", wrongAnswer);

        } else if (test[questionCount].answer != test[questionCount].choices[0] &&
            test[questionCount].answer != test[questionCount].choices[1] &&
            test[questionCount].answer != test[questionCount].choices[2]) {
            console.log("went through 3");

            $("#answer0").on("click", wrongAnswer);
            $("#answer1").on("click", wrongAnswer);
            $("#answer2").on("click", wrongAnswer);
            $("#answer3").on("click", rightAnswer);

        }

    } else {
        // clearTimeout(timer);
        countPage();
    }
}

//function to show the start button
function start() {
    console.log("went through start");
    startButtonDisplay.html("<button type='button' class='btn btn-danger' id='start'>START</button>");
    $("#start").on("click", questions)
}

//Main game sections
start();