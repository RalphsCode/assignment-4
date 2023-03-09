
// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calculate(){
    console.log('This is a private function and is not exported.');
}

// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////
// ADD FUNCTION
    function addFunction(x, y) {
    alert(`${x} plus ${y} = ${(x + y)}`)
    }
    
// SUBTRACT FUNCTION
    function subtractFunction(x, y) {
        alert(`${x} minus ${y} = ${(x - y)}`)
        }
        
// MULTIPLY FUNCTION
    function multiplyFunction(x, y) {
        alert(`${x} times ${y} = ${(x * y)}`)
        }
        
// DIVIDE FUNCTION
    function divideFunction(x, y) {
        alert(`${x} divided by ${y} = ${(x / y)}`)
        }
           
    
    // EXPORT THE FOUR PUBLIC FUNCTIONS

    export {addFunction} 
    export {subtractFunction} 
    export {multiplyFunction} 
    export {divideFunction} ;