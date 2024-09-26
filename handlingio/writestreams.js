var stream = require('stream');  // Import the stream module
var util = require('util');  // Import the util module for inheritance

util.inherits(Writer, stream.Writable);  // Inherit the Writable stream class in Writer

// Define the Writer class as a custom Writable stream
function Writer(opt) {
  stream.Writable.call(this, opt);  // Call the parent constructor (stream.Writable) with options
  this.data = new Array();  // Initialize an array to store written data
}

// Implement the _write() method, required by the Writable stream
Writer.prototype._write = function(data, encoding, callback) {
  this.data.push(data.toString('utf8'));  // Convert the data to a UTF-8 string and push it into the data array
  console.log("Adding: " + data);  // Log the data being written to the stream
  callback();  // Call the callback to signal that the write operation is complete
};

// Create an instance of the Writer stream
var w = new Writer();

// Write some data into the stream using the write() method
for (var i = 1; i <= 5; i++) {  
  w.write("Item" + i, 'utf8');  // Write "Item1", "Item2", "Item3", "Item4", and "Item5" to the stream
}

// End the stream by writing the final data
w.end("ItemLast");

// Output the data stored in the writer's array
console.log(w.data);  // Output: ["Item1", "Item2", "Item3", "Item4", "Item5", "ItemLast"]
