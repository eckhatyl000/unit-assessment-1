//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

var str1 = 'myName';
console.log();
//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */
var faveNum = '42';
console.log();

//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

var lovesCode = "true";
lovesCode = true;
console.log();
//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

if (faveNum === 13){
  console.log('lucky 13!');
} else {
  console.log('not lucky 13 waah wahhh');
}

//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/

for (let faveNum = 0, i < 5; i++){
  console.log(faveNum);
}