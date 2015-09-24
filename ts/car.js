function Car(name, engine) {
	this.engine = engine;
	this.name = name;
}

Car.prototype.getDescription = function() {
	console.log("Name: " + this.name + "; Engine: " + this.engine);
}

var bmw = new Car("BMW");
bmw.getDescription()
