var Car = (function () {
    function Car(name, engine) {
        this.name = name;
        this.engine = engine;
    }
    Car.prototype.getDescription = function () {
        console.log("Name: " + this.name + "; Engine2: " + this.engine);
    };
    return Car;
})();
var bmw = new Car("BMW", 3.0);
bmw.getDescription();
