//Define variables

//Define functions

//start button
var startButtonDisplay = $("#button");
var timeDisplay = $("#time");

function questions(){
    timeDisplay.text("Hello! It worked");
}

function start(){
    startButtonDisplay.html("<button type='button' class='btn btn-danger' id='start'>START</button>");
    $("#start").on("click", function() {
        questions();
    });
}

//Main sections
start();