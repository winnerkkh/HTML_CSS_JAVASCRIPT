/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this assignment has been copied manually or electronically from any other source (including web sites) or distributed to other students.
* Name: KYUNGHOON KIM; Student ID: 056845100; Date: 5/25/2017;
********************************************************************************/




/*****************************
* Task 1: Student Info
*****************************/

var studentName = "Kyunghoon Kim", numberOfCourses = 4, program = "Computer Programming Analysis", havingPartJob = 0;

console.log("My name is " + studentName + " and I'm in " + program + " and I'm taking " + numberOfCourses + " courses in this semester." );
console.log("My name is " + studentName + " and I'm in " + program + " and I'm taking " + numberOfCourses + " courses in this semester and I " + havingPartJob == 1 ? "have" : "don't have" + " a part-time job now.");


/*****************************
* Task 2: Birth and graduate
*****************************/

var currentYear = 2017
var age = prompt("Please enter your age: ");
console.log("You were born in the year of " + (currentYear - age));

var graduationYear = prompt("Enter the number of years you expect to study in the college: ");
console.log("You will graduate from Seneca college in the year of " + (parseInt(currentYear) + parseInt(graduationYear) ));

/*****************************
* Task 3: Celsius and Fahrenheit temperatures
*****************************/

var celsiusTemperature = 20;
var fahrenheit = (celsiusTemperature * (9/5)) + 32;
console.log(celsiusTemperature+"°C"+ " is " + fahrenheit + "°F");

var fahrenheitTemperature = 90;
var celsius = (fahrenheitTemperature - 32 ) * 5/9;
var fixedCelsius = celsius.toFixed(2);
console.log(fahrenheitTemperature + "°F" + " is " + fixedCelsius + "°C");


/*****************************
* Task 4: Even and odd numbers
*****************************/

for(var i = 0; i<=10; i++ ){
 
   if(i%2==1){
      console.log(i + ""+ " is odd");
   }
   else {
      console.log(i + ""+ " is even");
   }
}


/*****************************
* Task 5: Larger or largest number
*****************************/

var a = 5;
var b = 12;


//declaration approach
function largerNum(a, b){
 
   var largeNum;
 
   if(a>b){
      largeNum = a;
   }
   else{
      largeNum = b;
    
   }
 
   return largeNum;  
}

//expression approach
var greaterNum = function(a, b){
 
   var largeNum;
 
   if(a>b){
      largeNum = a;
   }
 
   else{
      largeNum = b;
   }
 
   return largeNum;
}

console.log("\"The larger number of " + a + " and " + b + " is " + largerNum(a, b) + "."+"\"");
console.log("\"The greater number of " + a + " and " + b + " is " + greaterNum(a, b) + "."+"\"");


/*****************************
* Task 6: Evaluator
*****************************/

function Evaluator(){
  var average = 0;
  var bool = false;
  if(arguments.length > 0){
    for(var i =0; i<arguments.length; i++){
      average += arguments[i];
    }
    average/=arguments.length;
  }
 
  if(average >= 50){
    bool = true;
  }
  return bool;

}

console.log("\"Average greater than or equal to 50: " + Evaluator(4,5,6,7,8) +"\"");


/*****************************
* Task 7: Grader
*****************************/

function Grader(grade) {
 
 var result;
 
   if(grade >= 80){
      result = "A";
   }
 
   else if(grade >= 70){
      result = "B";
   }
 
   else if(grade >= 60){
      result = "C";
   }
 
   else if(grade >= 50){
      result = "D";
   }
 
   else{
      result = "F";
   }  
  
  return result;
}

console.log("\"" + Grader(95) + "\"," + "\""+ Grader(75)+"\"," + "\"" + Grader(65)+"\"");



/*****************************
* Task 8: ShowMultiples
*****************************/

function showMultiples(num, numMultiples){
  for(var i=1; i<=numMultiples; i++){
    var multiples = num * i; 
    console.log(num + " x " + i + " = " + multiples);
  }
}

showMultiples(5, 4);
showMultiples(6, 5);
showMultiples(7, 6);