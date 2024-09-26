var stream = require('stream');  // Import the stream module
var util = require('util');  // Import the util module for inheritance

util.inherits(Answers, stream.Readable);  // Inherit the Readable stream class in Answers

// Define the Answers class as a custom Readable stream
function Answers(opt) {
  stream.Readable.call(this, opt);  // Call the parent constructor (stream.Readable) with options
  this.quotes = ["yes", "no", "maybe"];  // Set up an array of quotes (data that the stream will provide)
  this._index = 0;  // Initialize an index to keep track of which quote to read
}

// Implement the _read() method, required by the Readable stream
Answers.prototype._read = function() {
  if (this._index >= this.quotes.length) {  // If the index is out of bounds, signal the end of the stream
    this.push(null);  // Push null to indicate the end of the stream
  } else {
    this.push(this.quotes[this._index]);  // Push the current quote as a chunk of data
    this._index += 1;  // Move to the next quote
  }
};

// Create an instance of the Answers stream
var r = new Answers();

// Read data directly using the read() method and log it
console.log("Direct read: " + r.read().toString());  // Output the first quote directly ("yes")

// Set up an event listener for 'data' to read the stream asynchronously
r.on('data', function(data) {
  console.log("Callback read: " + data.toString());  // Output each quote as it's read ("yes", "no", "maybe")
});

// Set up an event listener for 'end' to signal the end of the stream
r.on('end', function() {
  console.log("No more answers.");  // Output this message when all quotes have been read and the stream ends
});
