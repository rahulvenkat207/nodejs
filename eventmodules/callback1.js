var events = require('events');

function CarShow() {
  events.EventEmitter.call(this); // Inherit from EventEmitter
  this.seeCar = function(make) {
    this.emit('sawCar', make); // Emit the 'sawCar' event
  };
}

// Set up prototype inheritance
CarShow.prototype.__proto__ = events.EventEmitter.prototype;

var show = new CarShow(); // Create a new CarShow instance

function logCar(make) {
  console.log("Saw a " + make); // Log the make of the car
}

function logColorCar(make, color) {
  console.log("Saw a %s %s", color, make); // Log the color and make of the car
}

// Attach event listeners
show.on("sawCar", logCar);
show.on("sawCar", function(make) {
  var colors = ['red', 'blue', 'black']; // Array of colors
  var color = colors[Math.floor(Math.random() * colors.length)]; // Randomly select a color
  logColorCar(make, color); // Log the color and make
});

// Simulate seeing cars
show.seeCar("Ferrari");
show.seeCar("Porsche");
show.seeCar("Bugatti");
show.seeCar("Lamborghini");
show.seeCar("Aston Martin");
