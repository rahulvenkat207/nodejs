var af = new Buffer("African Swallow?");  // Create a buffer for the string "African Swallow?"
var eu = new Buffer("European Swallow?");  // Create a buffer for the string "European Swallow?"
var question = new Buffer("Air Speed Velocity of an ");  // Create a buffer for the string "Air Speed Velocity of an "

console.log(Buffer.concat([question, af]).toString());  // Concatenate the "question" buffer with the "af" buffer and log the result ("Air Speed Velocity of an African Swallow?")
console.log(Buffer.concat([question, eu]).toString());  // Concatenate the "question" buffer with the "eu" buffer and log the result ("Air Speed Velocity of an European Swallow?")
