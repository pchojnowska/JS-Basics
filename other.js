var myCar = {
    maxSpeed: 50,
    driver: "Paulina",
    drive: function () {
        console.log("Now driving");
    },
    logDriver: function() {
        console.log("Driver name is " + this.driver);
    }
};

myCar.logDriver();
myCar.drive();

var myCar2 = {
    maxSpeed: 70,
    driver: "Adam",
    drive: function(speed, time) {
        console.log(speed * time);
    }

};

console.log(myCar2.maxSpeed);

myCar2.drive(50,3);
