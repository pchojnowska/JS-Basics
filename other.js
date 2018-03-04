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

