function Car(model, manufacturer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км/год`);
    };

    this.info = function() {
        console.log(`Модель – ${this.model}`);
        console.log(`Виробник – ${this.manufacturer}`);
        console.log(`Рік випуску – ${this.year}`);
        console.log(`Максимальна швидкість – ${this.maxSpeed}`);
        console.log(`Об’єм двигуна – ${this.engineCapacity}`);
        if (this.driver) {
            console.log(`Водій – ${JSON.stringify(this.driver)}`);
        }
    };

    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function(newValue) {
        this.year = newValue;
    };

    this.addDriver = function(driver) {
        this.driver = driver;
    };
}

let myCar = new Car("Model S", "Tesla", 2020, 250, "100 kWh");

myCar.drive();
myCar.info();

myCar.increaseMaxSpeed(30);
myCar.drive();

myCar.changeYear(2022);
myCar.info();

myCar.addDriver({name: "Ivan", age: 30, experience: "5 років"});
myCar.info();