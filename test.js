function getAverage (a,b) {
    var average = (a + b)/2; // a local variable
    console.log(average);
    return average;
}

getAverage(1,2);
var myResult = getAverage(1,2); // a global variable
console.log("the average of my numbers is " + myResult);