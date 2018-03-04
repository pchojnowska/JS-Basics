var a = 5;
var b = 7;

if (isNaN(a)) {
    console.log("that is not even a number");
} else {
    console.log("meaning of life is " + (a + b));
}

/* The above is the same as
if (!isNaN(a)) {
   console.log("meaning of life is " + (a + b));
   }
 */