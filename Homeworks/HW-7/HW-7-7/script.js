class Car {
    constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.driver = null;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км/год`);
    }

    info() {
        console.log(`Модель – ${this.model}`);
        console.log(`Виробник – ${this.manufacturer}`);
        console.log(`Рік випуску – ${this.year}`);
        console.log(`Максимальна швидкість – ${this.maxSpeed}`);
        console.log(`Об’єм двигуна – ${this.engineCapacity}`);
        if (this.driver) {
            console.log(`Водій – ${JSON.stringify(this.driver)}`);
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
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