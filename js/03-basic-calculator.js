// -------------------------------
// COMP 690 - Assignment 4
// Ralph Godkin
// Part 3 - Basic Calculator
// -------------------------------

// GLOBAL IMPORTS

import {addFunction} from './modules/calculator.js';
import {subtractFunction} from './modules/calculator.js';
import {multiplyFunction} from './modules/calculator.js';
import {divideFunction} from './modules/calculator.js';

    continueCalc()                                      // initiate the calculator using the continueCalc function

function continueCalc() {                               // function that asks if the user wants to continue playing the calculator
                      
    let calc = 'y';
    while (calc === 'y') {
        runCalc();
     calc = prompt('Would you like to calculate again? (y or n)');
     }
      alert('Thanks for calculating!');
                        }

function runCalc() {
    let number1 = parseFloat(prompt("Please enter your 1st number now"));
    let number2 = parseFloat(prompt("Please enter your 2nd number now"));
    let toDo = prompt("Select a calculation:\n      Add (press a) \n  Subtract (press s) \n  Multiply (press m) \n    Divide (press d)");

        
    switch(toDo) {
        case "a":
            addFunction(number1 , number2);
              break;
        case "s":
            subtractFunction(number1 , number2);
              break;
         case "m":
            multiplyFunction(number1, number2);
              break;
        case "d":
            divideFunction(number1, number2);
              break;
          default:
            confirm("You need to enter either a, s, m, or d. Click OK to continue.")       // handles a user entry other than a, s, m, or d 
                }
                }            
// -------------------
// END OF APPLICATION
// -------------------