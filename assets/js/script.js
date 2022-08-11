/*GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
        setInterval(function, milliseconds)
            Same as setTimeout(), but repeats the execution of the function continuously.
WHEN I answer a question
THEN I am presented with another question
 if statement
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
-function if user selects incorrectly, grabs value of time and subtracts
**make time global variable
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
^^ I think this was covered in class last Thursday, but I missed class and recording is not yet available */
//timer can be score
// when start button is clicked, empty container (dynamically), populate question + choices
//      questions could be h elements
//      choices could be buttons <-- append event listeners
//                                  listen for click, validateChoice()
//for loop to iterate/traverse length of array (question + choices as an object {})
/// question, wrong answer x3 and correct answer
//when user clicks on answer,  need to validate if correct
// if incorrect, subtract time : if correct, proceed to next
//in timer function, run setInterval (decrements time from userScore var)
//                      2nd parameter is usually 1000
//variables
var userScore = 10;

var questions = [
    { 
        question: "Is this working?",
        rightAnswer: "It better!",
        wrongAnswer1: "I hope so",
        wrongAnswer2: "YOu tell me",
        wrongAsnwer3: "No, clearly"
    },
    {
        question: "What am I doing",
        rightAnswer: "I have no idea",
        wrongAnswer1: "Nothing",
        wrongAnswer2: "Working",
        wrongAsnwer3: "Taking a nap obviously"
    }
]

var startBtn = document.querySelector(".start-button");
var actionContainer = document.querySelector("#actionContainer");
var timerContainer = document.querySelector("#timerContainer");

function startQuiz() {
    console.log("Quiz has started");
    // start the timer, obviously! So wrong our function startTimer()
    startTimer();
    displayNextQuestion();

}

function displayNextQuestion() {
    // iterate through your questions array,
    // dynamically create HTML elements for your question, and the four choices,
    // set their attributes, i.e. maybe their id, class, type etc
    // set their txtContent or innerHTML to the value of the current question's rightAnswer, wrongAnswer1, etc.
    // append the event listeners.
    // append the question and buttons to the actionContainer
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    var timer = setInterval(function() {
      userScore--;
      timerContainer.textContent = userScore;
      if (userScore === 0 || userScore < 0) {
        clearInterval(timer);
        userScore = 0;
        timerContainer.textContent = userScore;
        // if the time is ultimately 0, run a function which displays that the game is voer, times up, etc.
        // the function will be dynamically clearing out the actionCtainer and appending the message above
        // actionContainer.replaceChildren();
        // showEndGameContent();

        // // Tests if win condition is met
        // if (isWin && userScore > 0) {
        //   // Clears interval and stops timer
          
        //   winGame();
        // }
      }
      // Tests if time has run out
    //   if (userScore === 0) {
    //     // Clears interval
    //     clearInterval(timer);
    //     loseGame();
    //   }
    }, 1000);
}

startBtn.addEventListener("click", startQuiz);
