var correctCounter = 0;
var wrongCounter = 0;
var unanswered = 0;
var ding = new Audio();
var buzz = new Audio();
var seconds;
var correctAnswer;
var currentQuestion = 0;
var intervalId;
var answerChoices;

var triviaQuestions = [{
    question : "Cleopatra lived closer to today than when the pyramids were built",
    answers : ["true", "false"],
    answer : "true"
},{
    question : "The first man in space was Alan Shepard",
    answers : ["true", "false"],
    answer : "false"
},{
    question : "In the span of the release of the last 3 Star Wars movies, the Cleaveland Browns have won 1 game",
    answers : ["true", "false"],
    answer : "true"
},{
    question : "Anne Frank and Martin Luther King Jr. were born in the same year",
    answers : ["true", "false"],
    answer : "true"
},{
    question : "A pineapple takes a year to grow to maturity",
    answers : ["true", "false"],
    answer : "false"
},{
    question : "There are more chickens in America than people on the planet",
    answers : ["true", "false"],
    answer : "true"
},{
    question : "Sharks predate trees",
    answers : ["true", "false"],
    answer : "true"
},{
    question : "The guillotine was used in France until 1960",
    answers : ["true", "false"],
    answer : "false"
},{
    question : "The Azetc Empire is older than Oxford University",
    answers : ["true", "false"],
    answer : "false"
},{
    question : "The entire continent of South America is east of Florida",
    answers : ["true", "false"],
    answer : "true"

}];



$(document).ready(function(){

    //timer functions
var timer = {
    time : 5,

    reset : function() {
        clearInterval(intervalId);
        timer.time = 5;
        $("#timer").text(timer.time);
        timer.start();
    },

    start : function() {
       clearInterval(intervalId);
        intervalId = setInterval(timer.countdown, 1000);
    },

    stop : function() {
        clearInterval(intervalId);
        intervalId = setInterval(timer.countdown, 0000);
    },

    countdown : function() {
        timer.time--;
        $("#timer").text(timer.time);
        if((timer.time == 0) && (currentQuestion < 10)){     
            timerExpire();
        }
        else{
            return;
        }
        
    }
};

$("#startBtn").on("click", function(){
    $("#startBtn").hide();
    newQuestion();
    //also will need a reset function on start that sets everything to 0
});

//timer works, next thing needed is a function to make the questions appear on screen.

function newQuestion(){
    if(currentQuestion < 10){
        $("#timer").show();
        timer.time = 5;
        timer.start();
        $("#question").empty();
        $("#answerChoices").empty();
        $("#question").html("<h2>" + triviaQuestions[currentQuestion].question + "</h2>");
        for(var i = 0; i < 2; i++){
            answerChoices = $("<div>").addClass("theAnswers");
            answerChoices.text(triviaQuestions[currentQuestion].answers[i]);  
            $("#answerChoices").append(answerChoices);

        }
        
    } 
    else 
    {   
        reset();
    }
};



//need function to determine which answer is correct and for something to happen when you click
$("body").on('click', ".theAnswers", function(event){
    selectedAnswer = $(this).text(); 
    if((selectedAnswer === triviaQuestions[currentQuestion].answer) && (currentQuestion < 10)){
        console.log("correct");
        correctAnswer();
    } 
    else if((selectedAnswer != triviaQuestions[currentQuestion].answer) && (currentQuestion < 10)) {
        console.log("no");
        wrongAnswer();
    }

});

function correctAnswer(){
    //add to correct counter
    //current question ++
    //go to next question and restart timer
    correctCounter++;
    currentQuestion++;
    newQuestion();
    timer.reset();

}

function wrongAnswer(){
    //add to wrong counter
    //current question ++
    //got o next question and restart timer
    wrongCounter++;
    currentQuestion++;
    newQuestion();
    timer.reset();
}

function timerExpire(){
    unanswered++;
    currentQuestion++;
    newQuestion();
    timer.reset();
    
}
   
function reset(){
    //show final score of right/wrong/unaswered questions
    //condition that this function runs if current question[] hits 10
    console.log("why does the timer keep running");
    timer.stop();
    $("#timer").hide();
    $("#question").empty();
    $("#answerChoices").empty();
    $("#question").html("<h2>Total correct answers: " + correctCounter + "</h2>");
    $("#answerChoices").html("<h2>Total incorrect answers: " + wrongCounter + "</h2>");
    $("#unanswered").html("<h2>You didn't answer: " + unanswered + "</h2>");
    resetBtn = $("<button>");
    resetBtn.text("Try Again");
    $("#restartBtn").append(resetBtn);
    $("#restartBtn").on("click", function(){
        currentQuestion = 0;
        correctCounter = 0;
        wrongCounter = 0;
        unanswered = 0;
        $("#restartBtn").hide();
        newQuestion();
    })
}



});  //document ready end