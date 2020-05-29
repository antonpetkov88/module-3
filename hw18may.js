/*

1)
Write a JavaScript program to compute the sum of the two given integers. 
If the two values are same, then returns triple their sum. */

let tripleSum = function(a, b) {
    if (a===b) {
        return 3*(a + b);
    } else{ 
        return (a + b);
    }
    
}
console.log(tripleSum(5, 7));
console.log(tripleSum(3,3));

/*
2)
Write a JavaScript program to check two given numbers and return true if 
one of the number is 50 or if their sum is 50.*/

function checkNums(x, y) {
    return ((x === 50) || (y === 50) || (x + y === 50));
}

console.log(checkNums(50, 50));
console.log(checkNums(30, 50));
console.log(checkNums(25, 25));
console.log(checkNums(10,15));

/*
3)
Write a JavaScript program to remove a character at the specified position 
of a given string and return the new string.*/

function remChar(string, charposition) {
    part1 = string.substring(0, charposition);
    part2 = string.substring(charposition + 1, string.lenght);
    return (part1 + part2);
}
console.log(remChar("Liverpool", 3));
console.log(remChar("Liverpool", 6));

/*
4)
 Write a JavaScript program to find the largest of three given integers.*/

 function largestOfThree (a, b, c) {
     bigger = 0;
     if (a > b) {
         bigger = a;
     } else {
         bigger = b;
     }

     if (c > bigger) {
         bigger = c; 
     }
     return bigger;
 }
 console.log(largestOfThree(1, 3, 5));

/*
5)
Write a JavaScript program to check whether two numbers are in range 40..60
 or in the range 70..100 inclusive.*/

 function checkRange (a, b) {
    if ((a >= 40 && a <= 60 && b >= 40 && b <= 60)
        ||
        (a>= 70 && a <= 100 && b >= 70 && b <= 100))
        {
            return true;
        } else {
            return false;
        }
}
  console.log(checkRange(45, 55));
  console.log(checkRange(60, 95));
  console.log(checkRange(40, 99));
  
/*
6) 

Write a JavaScript program to create a new string of specified copies 
(positive number) of a given string.*/

function createCopies (string, x) {
    if (x < 0) 
    return false;
    else  
    return string.repeat(x);

}

console.log(createCopies("copythis", 2));
console.log(createCopies("1010", 0));
console.log(createCopies("1010110", 4));
console.log(createCopies("1001", -2));

/*
7)
Write a JavaScript program to display the city name if the string begins 
with "Los" or "New" otherwise return blank.*/

function cityName(name) {
    if (name.length >= 3 && ((name.substring(0, 3) == "Los")
                            || (name.substring(0, 3) == "New")))
     
        {
            return name;
      }
  
    return "";
  }
  
  console.log(cityName("New Jersey"));
  console.log(cityName("Los Angeles"));
  console.log(cityName("Sofia"));
  
/*
8)
Write a JavaScript program to compute the sum of three elements of a given 
array of integers of length 3.
*/

function elementsSum(element) {
    return element[0] + element[1] + element[2];
}

console.log(elementsSum([11, 22, 33]))

/*
9)
Write a JavaScript program to test whether an array of integers of length 2
 contains 1 or a 3.
 */ 

 function contains1or3(nums) {
    if (nums.indexOf(1) != -1 || nums.indexOf(3) != -1){
        return true;
     } else {
         return false;
     }
 }

 console.log(contains1or3([1, 9]));
 console.log(contains1or3([7, 3]));


/*
10)

Write a JavaScript program to test whether an array of integers of length 
2 does not contain 1 or a 3
*/

function not1or3(integers) {
    if (integers.indexOf(1) == -1 && integers.indexOf(3) == -1){
        return true;
    }   else {
        return false;
    }
}

console.log(not1or3([1, 9]));
console.log(not1or3([2, 7]));

/*
11) Write a JavaScript to find the longest string from a 
given array of strings.
*/
function longestString(arstr) {
    var max = arstr[0].length;
    arstr.map(v => max = Math.max(max, v.length));
    result = arstr.filter(v => v.length === max);
    return result;
  }
  
  console.log(longestString(["hey", "heey", "heeey", "heeeeeey"]));


/*
12)

Write a JavaScript program to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    Obtuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/

function angleType(degrees){
    if (degrees < 90) {
        return "Acute angle.";
    }
    if (degrees === 90){
        return "Right angle.";
    }
    if (degrees < 180 && degrees >90){
        return "Obtuse angle."
    }
    if (degrees === 180){
        return "Straight angle."
    }
}

console.log(angleType(90));
console.log(angleType(145));
console.log(angleType(90));
console.log(angleType(180));

/*
13)

Write a JavaScript program to find the index of the greatest element of a 
given array of integers */

function index(array) {
    let greatest = 0             //innital value of the variable
    let i                //it will be returned from the function
    for (let index = 0; index < array.length; index++) {
                                //const element = array[index];
        if (array[index] > greatest){ // index=0, array[index]=array[0]=12, greatest=0 | index=1, array[1]=15, greatest=12 | index = 2, array[2] = 17, greatest=15 | index = 3, array[3] = 9, greatest = 17
            greatest = array[index] // 12 > 0 ? YES => greatest=12 | 15 > 12 ? YES => greatest = 15 | 17 > 15 ? YES => greatest = 17
            i = index // i=0 | i=1 | i=2 | i=3
        }
        else {
            greatest = greatest
        }
    }
    return i
}

console.log(index([12, 15, 17, 9]));

/*
14)

Write a JavaScript program to get the largest even number from an array of 
integers.
*/

function largestEven(array) {
    let largest = 0
    for (let index = 0; index < array.length; index++) {
        //const element = array[index];
        if (array[index] % 2 === 0){
            if (array[index] > largest) {
                largest = array[index]
            }
            else largest = largest
        }
        else continue
    }
    return largest
}

console.log(largestEven([2, 4, 8, 10]));

/*
15)

Write a JavaScript program to check two given numbers and return true if 
one of the number is 50 or if their sum is 50. */

function checkNums(x, y) {
    return ((x === 50) || (y === 50) || (x + y === 50));
}

console.log(checkNums(50, 50));
console.log(checkNums(30, 50));
console.log(checkNums(25, 25));
console.log(checkNums(10,15));

/*
16)

Write a JavaScript program to check from two given integers, whether one 
is positive and another one is negative. */

function posOrNeg(x, y){
    if ((x > 0) || (y > 0)){
        return "positive";
    } else if ((x = 0) || (y = 0)){
        return "zero"
    } else {
        return "negative"
    }
}
console.log(posOrNeg(1, -1));

/*
17)

Write a JavaScript program to create new string with first 3 characters 
are in lower case and the others in upper case. If the string length is less
 than 3 convert all the characters in upper case. */


function upperLowerCase (str){
    if (str.length <3){
        return str.toUppercase();
    }
    let firstPart = str.substring

}


/*
18)

Write a JavaScript program to compute the sum of the two given integers, 
If the sum is in the range 50..80 return 65 otherwise return 80. */

function computeSum(int1, int2){
    let intSum = int1 + int2;
    
        if(Number.isInteger(int1) && (Number.isInteger(int2))){
            return (50 < intSum && intSum < 80) ? (65) : (80)
        }
        
}
console.log("Sum is", computeSum(25, 45))
/*
19)

Convert a number to a string, the contents of which depend on the number's 
factors.

If the number has 3 as a factor, output 'Pling'.
If the number has 5 as a factor, output 'Plang'.
If the number has 7 as a factor, output 'Plong'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's 
digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
In raindrop-speak, this would be a simple "Plong".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
In raindrop-speak, this would be a "PlingPlang".
34 has four factors: 1, 2, 17, and 34.
In raindrop-speak, this would be "34".  */

//input - number/ output - string
// factor""" - if it's divided by 


/*
20)
Convert a phrase to its acronym, like Portable Network Graphics to its 
acronym (PNG).
*/
// transform the strings into arrays






const strivify = (s) => {
    if(typeof s === "string"){
        return s.startsWith("Strive") ? s : `Strive ${s}`
    }
    else{
        throw new Error("s must be a string")
    }
}
console.log(strivify("Sure"))

const check3and7 = (number) => {
    if(typeof number==="number" && number>0){
        return number%3===0 && number%7===0;
    }
    else{
        throw new Error("Number parameter must be a positive number");
    }
}
console.log(check3and7(42))



const giveMeRandom = (number) => {
    let array=[];
    if(typeof number==="number"){ 
        for(let i=0; i<number;){
            let random = Math.floor(Math.random()*11);
            if(!array.includes(random)){
                array.push(random)
                i++
            }
          
        }
    }
    return array;
}
console.log(giveMeRandom(7))

function depositCalculator(amount, months, irate) {
    if (amount = Number && (0 < amount < 10000)){
    
    } else if (months = Number.isInteger && (0 < months < 12)) {
        
    } else if (irate = Number && (0 < irate < 10000)) {
        let interest = amount*irate/100;
        let monthlyInterest = interest/12;
        let totalAmount = amount + months*(monthlyInterest);
        return totalAmount
    } else {
        return ("Number must be a positive number")
    }


}
console.log(depositCalculator(1000, 3, 5.5))