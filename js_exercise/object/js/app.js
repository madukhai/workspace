
var car = {
	"make" : "lamborghini",
	"model" : "LP-700-4 ROADSTER",
	"color" : "white"
}




function Car(){
	this.make = "";
	this.model = "";
	this.color = "";
}

function CarFactories(){
	this.try = "tries";
	this.brand = "";
	this.carsAvaliable = [];
	this.num_of_cars = 0;
	this.manufacture = function(car,num_of_needs){
		this.brand = car.make;
		for(var i=0;i<num_of_needs;i++){
			this.carsAvaliable.push(car);
			this.num_of_cars ++;
		}
	}
}
	
var carfac = new CarFactories();
carfac.manufacture(car,8);
console.log(carfac);

var carfac1 = new CarFactories();
delete carfac1.brand;
carfac1.manufacture(car,2);
console.log(carfac1);

delete CarFactories.try;
var carfac2 = new CarFactories();
carfac2.manufacture(car, 3);
console.log(carfac2);

