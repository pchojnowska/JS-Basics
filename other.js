//constructor function

var Car = function(maxSpeed, driver) {
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time) {
        console.log(speed * time);
    };
    this.logDriver = function() {
        console.log("Driver name is " + this.driver);
    };
};

var myCar = new Car(50, "Adam");
var myCar2 = new Car(80, "Paulina");

myCar.drive(30,4);
myCar2.logDriver();
console.log(myCar.maxSpeed);

// Date object
var birthday = new Date(1980, 3, 1, 10, 20, 15);
var birthday2 = new Date(1980, 3, 1, 10, 20, 15);
console.log(birthday.getTime());

if (birthday.getTime()===birthday2.getTime()) {
    console.log("You were born on the same day");
} else {
    console.log("We have different dates of birth");
}