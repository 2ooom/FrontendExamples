class Car {
	constructor(
		public name:String,
		public engine:Number)
	{

	}

	getDescription(){
		console.log("Name: " + this.name + "; Engine: " + this.engine);
	}
}

class SportCar extends Car {
	public isTuned: Boolean;


	getDescription() {
		if(this.isTuned) {
			console.log("TUNED " + this.name);
		} else {
			console.log("Name: " + this.name + "; Engine: " + this.engine);
		}
	}
}


class Bus extends Car {
	public seats: Number;
}

class MiniVan extends Bus {

	constructor(
		name: String,
		engine: Number) {
		super(name, engine);
		this.seats = 20;
	}
}

var bmw = new Car("BMW", 3.0);
bmw.getDescription()

var m3 = new SportCar("BMW M3", 5.0)
m3.isTuned = true;
m3.getDescription()

var ikarus = new Bus("Ikarus", 5.0)
ikarus.getDescription()

var transporter = new MiniVan("VW Transporter", 3.0)

console.log(transporter.seats)