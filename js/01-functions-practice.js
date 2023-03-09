// ---------------------------
// COMP 690 - Assignment 4
// Ralph Godkin
// Part 1 - Functions Practice
// ---------------------------

//STEP 1

function halfNumber(x) {
    console.log(`\n  Half of ${x} is ${x / 2}.\n`)
}
halfNumber(5);

//STEP 2

const squareNumber = (x) => {console.log(`\n  The square of ${x} is ${x * x}.\n`)}

squareNumber(5);

//STEP 3

function percentOf( x, y ) {
    console.log(`\n  Result: ${x} is ${parseInt((x / y) * 100)}% of ${y}.\n`)
}
percentOf(4, 11);

//STEP 4

function findModulus( a, b ) {
    console.log(`\n  If you divide ${b} into ${a} you get a modulus of: ${(a % b)}.\n`)
}
findModulus(10, 3);

//STEP 5

console.log(`Assignment Error at STEP 5. \n- Error Log: STEP 5 is undefined.`);

// PRACTICE COMPLETE
// -----------------