/*GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
        setTimeout(function, milliseconds)
            Executes a function, after waiting a specified number of milliseconds.
        setInterval(function, milliseconds)
            Same as setTimeout(), but repeats the execution of the function continuously.
WHEN I answer a question
THEN I am presented with another question
 if statement
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
^^ I think this was covered in class last Thursday, but I missed class and recording is not yet available */

//variables
//initialize score:
var score = 0;

var quizBtn = document.querySelector("#quiz");

