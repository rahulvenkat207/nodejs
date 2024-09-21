function logCar(logMsg, callback) {
    process.nextTick(function() {
      callback(logMsg);
    });
  }
  
  var cars = ["Ferrari", "Porsche", "Bugatti"];
  
  // Using 'let' for block scoping
  for (var idx in cars) {
    var message = "Saw a " + cars[idx];
    logCar(message, function() {
      console.log("Normal Callback: " + message);
    });
  }
  
  // The second loop remains unchanged; it works correctly using closure.
  for (var idx in cars) {
    var message = "Saw a " + cars[idx];
    (function(msg) {
      logCar(msg, function() {
        console.log("Closure Callback: " + msg);
      });
    })(message);
  }
  