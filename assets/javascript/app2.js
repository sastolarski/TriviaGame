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
    question : "Gwen Stefani is younger than Ted Cruz",
    answers : ["true", "false"],
    answer : "false"
},{
    question : "In the span of the release of the last 3 Star Wars movies, the Cleaveland Browns have won 1 game",
    answers : ["true", "false"],
    answer : "true"
},{
    question : "Anne Frank and Martin Luther King Jr. were born in different years",
    answers : ["true", "false"],
    answer : "false"
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
    question : "Sir Christoper Lee witnessed the last public execution in France",
    answers : ["true", "false"],
    answer : "true"
},{
    question : "The human body consists of (roughly) a 2-to-1 ratio fo bacterial to human cells",
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
    time : 7,

    reset : function() {
        timer.time = 7;
        $("#timer").text(timer.time);
    },

    start : function() {
       
        intervalId = setInterval(timer.countdown, 1000);
    },

    stop : function() {
        
        clearInterval(intervalId);
    },

    countdown : function() {
        timer.time--;
        $("#timer").text(timer.time);
        if(timer.time <= 0){
            clearInterval(intervalId);
            timer.time = 7;
            currentQuestion++;
            newQuestion();
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

//need function to determine which answer is correct and for something to happen when you click
$("body").on('click', ".theAnswers", function(event){
    selectedAnswer = $(this).text();
    if(selectedAnswer === triviaQuestions[currentQuestion].answer){
        console.log("correct");

    } else {
        console.log("no");
    }

});

function correctAnswer(){
    //add to correct counter
    //current question ++
    //go to next question and restart timer
}

function wrongAnswer(){
    //add to wrong counter
    //current question ++
    //got o next question and restart timer
}

function timerExpire(){
    //same as above but on the condition of clock hitting 0
}
   







});  //document ready end