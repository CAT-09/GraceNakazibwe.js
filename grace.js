/**
 * 
 * 
 */
//This is a dynamic function named tests that takes in two parameters test1 and test2.
 function tests(test1,test2)
 {
 //Inside the function, the variable greater is assigned a value that is  the result of the conditional which states that if test1 is greater than test1 
//then the variable  greater than should be assigned test1 else it should be assigned test2. The conditional however seems problematic because it is not comparing the same parameter and the second parameter in the function is not catered for. The function lacks one last curly brace and a call back for the function.  
 let greater = test1>test1?test1:test2
 //This is a return statement that is supposed to return the greater variable that was got assigned the line above(Line 10).
 return greater

 /**
  * 
  * 
  * 
  * 
 */
//This is a dynamic  function called coursework and passes in a parameter named cswork.
  function coursework(cswork)
  {
//The variable  coursework is being assigned  a value that is a result that comes from adding the  (cswork)parameter from the coursework  function and the outcome from the function tests when (80,80) have been passed in as arguements. 
//The variable coursework inside the function however has the same name as the function.
let coursework = cswork + tests(80,80)
//The coursework is being printed on the console. But has no termination operator.
  console.log(coursework)
//A return statement for the coursework function. The function however doesnt have a call back.   
 return coursework
 
  
 /*
  * 
  * 
  * 
 */
//This is a  dynamic function called avg that has a parameter(a) passed in.
 function avg(a)
 {
//A variable avg which also has the same name as the function is being assigned  a result that comes about by getting a result from the coursework function with an arguement(90)passed in, and it is divided by the parameter inside the avg function.
 let avg =coursework(90)/a
//This is  a return statement that returns the value of avg. This function was not given a call back. 
 return avg
 
 }
 
 /**
  * 
  * 
 */
//This a dynamic  function  called crsmark and it passes in a parameter of (a)
 function crsmark(a)
 {
//The exm variable has been assigned a value that results from using the avg function with an arguement(2) passed in and its being multiplied by a division between  the parameter in the crsmark function and 100.

 let exm = avg(2)*(a/100)
//This is a return statement that returns the value of exm. This function however has no call back. 
  return exm 
 }
 //This is a dynamic function called exam that has a parameter (a) passed inside.
 function exam(a)
 {
//The variable called fexam is assigned a value that results from a computation of 60 divided by 100 and then being multiplied to the value that will be passed inside parameter (a)   
 let fexam = (60/100)*a
 //This is a return statement for fexam. The function however doesnt have a call back. 
 return fexam
 
 }
 /**
  * 
  * 
 */
//This function is called fnal and has no parameters passed.
 function fnal()
 {
 //The variable fmark is assigned a value that will be  a result that will come from  the execution of the exam function with an arguement of 75 being added to the execution of the crsmark function with a parameter of 40.    
 let fmark = exam(75)+crsmark(40)
 //This line of code prints fmark variable to the console. 
 console.log(fmark)
 
 }
 //The fnal function is being called but the termination operator was not put. 
 fnal()