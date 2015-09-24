var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Car = (function () {
    function Car(name, engine) {
        this.name = name;
        this.engine = engine;
    }
    Car.prototype.getDescription = function () {
        console.log("Name: " + this.name + "; Engine: " + this.engine);
    };
    return Car;
})();
var SportCar = (function (_super) {
    __extends(SportCar, _super);
    function SportCar() {
        _super.apply(this, arguments);
    }
    SportCar.prototype.getDescription = function () {
        if (this.isTuned) {
            console.log("TUNED " + this.name);
        }
        else {
            console.log("Name: " + this.name + "; Engine: " + this.engine);
        }
    };
    return SportCar;
})(Car);
var Bus = (function (_super) {
    __extends(Bus, _super);
    function Bus() {
        _super.apply(this, arguments);
    }
    return Bus;
})(Car);
var MiniVan = (function (_super) {
    __extends(MiniVan, _super);
    function MiniVan(name, engine) {
        _super.call(this, name, engine);
        this.seats = 20;
    }
    return MiniVan;
})(Bus);
var bmw = new Car("BMW", 3.0);
bmw.getDescription();
var m3 = new SportCar("BMW M3", 5.0);
m3.isTuned = true;
m3.getDescription();
var ikarus = new Bus("Ikarus", 5.0);
ikarus.getDescription();
var transporter = new MiniVan("VW Transporter", 3.0);
console.log(transporter.seats);
