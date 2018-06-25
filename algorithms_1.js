// lease work on the following challenges and upload your work in a single file.

// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function printto255() {
   
    for (var i = 1; i < 256; i++){
        console.log(i);
        
    }

}


// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function getEvenTo1000(){
    var sum = 0;
    for (let i = 0; i < 1001; i++) {
        if (i % 2 === 0) {
            sum = sum + i;
        }
        else { }
    }
    return sum;
}
// console.log(getEvenTo1000())

// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function sumOdd5000(){
    var sum = 0;
    for (let i = 0; i < 5001; i++) {
      if ( i % 2 ==! 0){
          sum = sum + i;
      }
      else{}
    }
    return sum;
}

// console.log(sumOdd5000())

// Iterate an array - Write a function that returns the sum of all the values within an array.
 //(e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
 function sumArr(x) {
     var sum = 0;
     for (let i = 0; i < x.length; i++) {
         sum= sum + x[i];
         
     }
     return sum;
 }
// console.log(sumArr([-5,2,5,12]))

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. 
//(e.g. for [-3,3,5,7] max is 7)
 function findMax(array) {
    var highNum= 0; 
    for (let i = 0; i < array.length; i++) {
         if (array[i] > highNum) {
             highNum = array[i];
             
         }
         
     }
     return highNum;
 }
// console.log(findMax([-3,3,5,7]));

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. 
//(e.g. for [1,3,5,7,20] average is 7.2)
function findAverage(array) {
    var sum = 0;
    var dividedBy = array.length;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
console.log("sum is " + sum);
console.log("div is" + dividedBy);
    return sum / dividedBy;
}


// console.log(findAverage([1, 3, 5, 7, 20]));

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50.
// (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function oddArray() {
    var newARR = [];
    for (let i = 0; i < 51; i++) {
        if (i % 2 ==! 0){
            newARR.push(i);
        }
        
    }
    return newARR;
}

// console.log(oddArray());

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values 
//that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2.
// (There are two values in the array greater than 3, which are 5, 7).

function greaterThanY(array, y) {
var count = 0;
    
    for (let i = 0; i < array.length; i++) {
        if(array[i] >  y){
            count++;
        }
        
    }
    return count;
}

// console.log(greaterThanY([1, 3, 5, 7], 3));


// Squares - Given an array with multiple values, write a function that replaces each value in the array with 
//the product of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function squares(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * array[i];
        
    }
    return array;
}

// console.log(squares([1, 5, 10, -2]));



// Negatives - Given an array with multiple values, write a function that replaces 
//any negative numbers within the array with the value of 0. When the program is done the array
//should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function negatives(array) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] < 0) { 
            array[i] = 0;
        }
    }
    return array;
}


// Max/Min/Avg - Given an array with multiple values, write a function that returns a new 
//array that only contains the maximum, minimum, and average values of the original array.
// (e.g. [1,5,10,-2] will return [10,-2,3.5])
function maxMinAvg(array) {
    var min = 99;
    var max = 0;
    var sum =0;
    var count = array.length;
    var newArr =[];
     for (let i = 0; i < array.length; i++) {
         sum += array[i];
         if (array[i] < min) {
             min = array[i];
         } else if (array[i] > max) {
             max = array[i];
         }
         
     }
     newArr.push(max);
     newArr.push(min);
     newArr.push(sum/count);

     return newArr;

}


// console.log(maxMinAvg([1, 5, 10, -2]));

// Swap Values - Write a function that will swap the first and last values of any given array.
// The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swapValues(array) {
    var firstNum = array[0];
    var lastNum = array[array.length -1];
    
    console.log(lastNum);
  array[0] = lastNum;
    array[array.length-1] = firstNum;
    return array;
}
// console.log(swapValues([1, 5, 10, -2]));

// Number to String - Write a function that takes an array of numbers and replaces any negative values 
//within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function numberToString(array) {
    for (let i = 0; i < array.length; i++) {
       if(array[i] < 0){
           array[i] ="DOJO";
       }
        
    }
    return array;
}

// console.log(numberToString([-1,2,-3]));