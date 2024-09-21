function logCar(car, callback) {
    console.log("Saw a %s", car);
    process.nextTick(callback); // Call the callback without checking 'cars.length' here
  }
  
  function logCars(cars) {
    if (cars.length) { // Check if there are cars left
      var car = cars.pop(); // Remove and get the last car
      logCar(car, function() {
        logCars(cars); // Recursively log the next car
      });
    }
  }
  
  var cars = ["Ferrari", "Porsche", "Bugatti", 
              "Lamborghini", "Aston Martin"];
  logCars(cars);
  