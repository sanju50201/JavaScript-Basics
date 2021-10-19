// console.log("Hello");
// alert('Hello this is a JS tutorial');
// Variables
var a = 'This is a JS file';
console.log(a);
// var num1 = 45;
console.log(num1);
// var age = prompt("What is your age?");
// document.getElementById('text1').innerHTML = age;
var num1 = 4;
var num1 = num1 + 4;
var num2 = 5;
console.log(num1 * 4);
console.log(5 * 5);
console.log(num1 * num2);
console.log(num1);
// Increment
// num1++;
num1++;
console.log(num1);
// Decrement 
num1--;
console.log(num1);
num1--;
console.log(num1);
num2++;
console.log(num2);
console.log(num1 % 7);
// Increment decrement by any number
num1 += 20;
console.log(num1);
num2 += 4;
console.log(num2);

/* Functions
1. Create a function.
2. Call a function.
*/
// Creating
function fun(){
    console.log("This is a function alert");
}
// Calling
fun();
/* Let's create a function which says your name and returns with Hello */
function greeting(yourName){
    var result = "Hello" +  " " +  yourName; //String Concatenation
    
    
    console.log(result);

}
var name = prompt("What is your name?");
greeting(name);


function place(){
    var location = prompt("Where do you stay? ");
    var fresult = "You stay in " + " " + location;
    console.log(fresult);

}
// place();
// How do arguements work in function?
// how to add 2 numbers in a function? (even strings can be added to)

function sumOfTwoNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result);
}
// sumOfTwoNumbers('Hello ', 'Sanjith');

// console.log("A")