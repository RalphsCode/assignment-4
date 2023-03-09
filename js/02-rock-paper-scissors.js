// -------------------------------
// COMP 690 - Assignment 4
// Ralph Godkin
// Part 2 - Rock, Paper, Scissors
// -------------------------------

// Global Variables
let getChoice;                                          // is the computers choice (Rock, paper, or scissors)
let userChoice;                                         // is the users choice (1, 2, or 3)
let compChoice;                                         // converted computer choice from 1, 2, or 3, to: Rock, paper, or scissors
let winner;                                             // contains the game result string

playGame()                                              // calling the main function that runs the game

continueGame()                                          // calling the function that asks if the user wants to continue playing

//  The 4 functions follow

function continueGame() {                               // function that asks if the user wants to continue playing the game
                      
   let playAgain = 'y';
   while (playAgain === 'y') {
    playGame();
    playAgain = prompt('Would you like to play again? (y or n)');
    }
     alert('Thanks for playing the Rock, Paper, Scissors game with me!');
     }
                        
function determineWinner() {                            // function that determins who won the game

        if ( (getChoice == "r" && compChoice == 1) || (getChoice == "p" && compChoice == 2) || (getChoice == "s" && compChoice == 3) ) 
                { winner = " It's a TIE !"  }                   // If user and computer have same choice
    
        else if ( (getChoice == "r" && compChoice == 2) ) {     // If user chooses Rock
                winner = " Computer wins this round!" }
        else if ( (getChoice == "r" && compChoice == 3)) {
                winner = "    You won! \u{1F600}" }
    
        else if ( (getChoice == "p" && compChoice == 1)) {      // If user chooses Paper
                winner = "    You won! \u{1F600}" }
        else if ( (getChoice == "p" && compChoice == 3)) {
                winner = " Computer wins this round!" }
        
        else if ( (getChoice == "s" && compChoice == 1)) {      // If user chooses Scissors
                winner = " Computer wins this round!" }
        else if ( (getChoice == "s" && compChoice == 3)) {
                winner =  "    - You won! \u{1F600}" }
           }

function formatCompChoice(x) {                          // converts the computer choice from 1, 2, or 3, to: Rock, paper, or scissors
    if ( x == 1) {compChoice = "Rock" }
    else if (x == 2) {compChoice = "Paper"}
    else {compChoice = "Scissors"}
                                };

function playGame() {                                   // main function that runs the game

        getChoice = prompt("What's your choice (r)Rock, (p)Paper), or (s)Scissors? Enter r, p, or s ");
        if ( getChoice == "r") {userChoice = "Rock"}
        else if (getChoice == "p") {userChoice = "Paper"}
        else if (getChoice == "s") { userChoice = "Scissors"}
        else {
            confirm("You need to enter either r, p, or s. Click OK to continue.")       // handles a user entry other than r, p, or s
            {return}
        };

        compChoice = Math.floor(Math.random() * 4);     // computer picks a random number between 1 & 3

        determineWinner(compChoice);                    // calls the function to determine who won the game

        formatCompChoice(compChoice);                   // calls the function to convert the computers choice to a string
  
        alert("You chose: " + userChoice + "\nComputer chose: " + compChoice + "\n \n" + winner);         // game result is displayed
                     }
// -------------------------------
//       END OF APPLICATION
// -------------------------------