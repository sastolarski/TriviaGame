//global vars- correctCounter, wrongCounter, unanswered
//press start to begin button
//on start 1st question appears along with 1st question true or falses
//timer starts with 5 seconds on the clock
//if the user chooses the correct answer, immediatly move to the next question, add 1 to correctCounter
//if the users answers a question incorrectly, same thing but add 1 to wrongCounter
//after 10? questions show results
//add audio variables
    //ding for correct, buzzer for incorrect
//objects for all questions


var correctCounter = 0;
var wrongCounter = 0;
var unanswered = 0;
var ding = new Audio();
var buzz = new Audio();
var seconds;


var triviaQuestions = [{
        question : "Cleopatra lived closer to today than when the pyramids were built",
        answers : ["true", "false"],
        answer : 0
    },{
        question : "Gwen Stefani is younger than Ted Cruz",
        answers : ["true", "false"],
        answer : 1
    },{
        question : "In the span of the release of the last 3 Star Wars movies, the Cleaveland Browns have won 1 game",
        answers : ["true", "false"],
        answer : 0
    },{
        question : "Anne Frank and Martin Luther King Jr. were born in different years",
        answers : ["true", "false"],
        answer : 1
    },{
        question : "A pineapple takes a year to grow to maturity",
        answers : ["true", "false"],
        answer : 1
    },{
        question : "There are more chickens in America than people on the planet",
        answers : ["true", "false"],
        answer : 0
    },{
        question : "Sharks predate trees",
        answers : ["true", "false"],
        answer : 0
    },{
        question : "Sir Christoper Lee witnessed the last public execution in France",
        answers : ["true", "false"],
        answer : 0
    },{
        question : "The human body consists of (roughly) a 2-to-1 ratio fo bacterial to human cells",
        answers : ["true", "false"],
        answer : 1
    },{
        question : "The entire continent of South America is east of Florida",
        answers : ["true", "false"],
        answer : 0
    
}];

var transitionMessages = ["Correct!", "Wrong!", "Let's see how you did!"]


$(document).ready(function(){

    $("#startBtn").on("click", function(){
        $(this).hide();
        gameReset();
    });

    function gameReset(){
        $("#questionNum").empty();
        $("#question").empty();
        $("#answerChoices").empty();
        correctCounter = 0;
        wrongCounter = 0;
        unanswered = 0;
        currentQuestion = 0;
        newQuestion();
        //also display new question function
        //new question function will include timer 
    };

    function newQuestion(){
        $("#questionNum").empty();
        $("#question").empty();
        $("#answerChoices").empty();
        $("#questionNum").html("Question #"+(currentQuestion+1)+"/"+triviaQuestions.length);
        $("#question").html("<h2>" + triviaQuestions[currentQuestion].question + "</h2>");
        for (var i = 0; i < 2; i++) {
            answerChoices = $("<div>");
            answerChoices.text(triviaQuestions[currentQuestion].answers[i]);
            $("#answerChoices").append(answerChoices);
        }

    }

           // currentQuestion++; put this in the click handler that goes with answer selection and time running out


    
















}); //document ready ending