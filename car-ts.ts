class Car {
	constructor(
		public name:String,
		public engine:Number)
	{

	}

	getDescription(){
		console.log("Name: " + this.name + "; Engine2: " + this.engine);
	}
}

var bmw = new Car("BMW", 3.0);
bmw.getDescription()