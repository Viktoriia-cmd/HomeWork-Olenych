function Car (model, manufacturer, year, maxSpeed, volume) {
    this.model = model
    this.manufacturer = manufacturer
    this.year = year
    this.maxSpeed = maxSpeed
    this.volume = volume
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        console.log(`Модель ${this.model}`);
        console.log(`Виробник ${this.manufacturer}`);
        console.log(`Рік випуску ${this.year}`);
        console.log(`Максимальна швидкість ${this.maxSpeed}`);
        console.log(`Об'єм двигуна $${this.volume}`);
    };
    this.increaseMaxSpeed = function (newSpeed) {
       if (newSpeed > 0) this.maxSpeed += newSpeed;
        console.log(`Нова максимальна швидкість ${this.maxSpeed}`)
    }
    this.changeYear = function (newYear) {
       if (newYear > 1815) this.year = newYear;
        console.log(`${this.year}`)
    };
    this.addDriver = function (driver) {
        if (driver) this.driver = driver
        console.log(`${JSON.stringify(this.driver)}`)

    };
}
const car = new Car ('Model S', 'Tesla', 2020, 250, 2);
car.drive();
car.info();
car.increaseMaxSpeed(30);
car.changeYear(2022);
car.addDriver ({name: 'Vitalii', age: 40, experience: '20 років'});


