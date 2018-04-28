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
var timeCounter = 5;

var triviaQuestions = [{
        question1 : "Cleopatra lived closer to today than to when the pyramids were built",
        answers : ["true", "false"],
        answer : 0
    },{
        question2 : "Gwen Stefani is younger than Ted Cruz",
        answers : ["true", "false"],
        answer : 1
    },{
        question3 : "In the span of the release of the last 3 Star Wars movies, the Cleaveland Browns have won 1 game",
        answers : ["true", "false"],
        answer : 0
    },{
        question4 : "Anne Frank and Martin Luther King Jr. were born in different years",
        answers : ["true", "false"],
        answer : 1
    },{
        question5 : "A pineapple takes a year to grow to maturity",
        answers : ["true", "false"],
        answer : 1
    },{
        question6 : "There are more chickens in America than people on the planet",
        answers : ["true", "false"],
        answer : 0
    },{
        question7 : "Sharks predate trees",
        answers : ["true", "false"],
        answer : 0
    },{
        question8 : "Sir Christoper Lee witnessed the last public execution in France",
        answers : ["true", "false"],
        answer : 0
    },{
        question9 : "The human body consists of (roughly) a 2-to-1 ratio fo bacterial to human cells",
        answers : ["true", "false"],
        answer : 1
    },{
        question10 : "The entire continent of South America is east of Florida",
        answers : ["true", "false"],
        answer : 0
    
}];


$(document).ready(function(){


    
















}); //document ready ending