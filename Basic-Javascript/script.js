var firstName = 'Ibrahim';

console.log(firstName);

//Type coercion
var Job, isMarried, age;
age = 28;
Job = 'Developer';
isMarried = false;

console.log('My name is ' + firstName + ', I am ' + age + 'years old.' + ' I am working as a' + ' ' + Job  + ', Are you married? '  + isMarried);

//Variable Mutation

age = 'twenty eight';
Job = 'Driver';

var lastName = prompt('what is lastName');
console.log(firstName + ' ' + lastName);
alert('I am a ' + Job + ' and ' + age + ' years old.');

/*=======================================
  Using the Console.log() to Evaluate exercise in Javascript Course
  */
// var markMass = 56;
// var johnMass = 55;
// var markHeight = 9.5;
// var johnHeight = 6;
// var markBMI = markMass / (markHeight * markHeight);
// console.log(markBMI);
// var johnBMI = johnMass / (johnHeight * johnHeight);
// console.log(johnBMI);
// var isMarkBMI = markBMI > johnBMI;
// console.log(isMarkBMI);
// console.log("Is Mark's BMI " + "higher than " + "John's BMI? " + isMarkBMI);

/*=======================================
  Using Prompt and Alert to build a Calculator for BMI
  */
// var markMass = prompt('What is mark Mass?')
// var johnMass = prompt('What is John Mass?')
// var markHeight = prompt('What is mark Height?')
// var johnHeight = prompt('What is John Height?')
// var markBMI = markMass / (markHeight * markHeight)
// alert('Mark BMI is ' +  markBMI)
// var johnBMI = johnMass / (johnHeight * johnHeight)
// alert('John BMI is ' +  johnBMI);



/*=======================================
  if/else Statement
  */

var markMass = 56;
var johnMass = 155;
var markHeight = 9.5;
var johnHeight = 6;
var markBMI = markMass / (markHeight * markHeight);
console.log('Mark\'s BMI is ' + markBMI);
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log('John\'s BMI is ' + johnBMI);

if(markBMI > johnBMI){
  console.log('Mark\'s BMI ' + 'is greater than John\'s BMI');
} else{
  console.log('John\'s BMI ' + 'is greater than Mark\'s BMI');
}







