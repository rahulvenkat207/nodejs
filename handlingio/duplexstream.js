var stream = require('stream');  // Import the stream module
var util = require('util');  // Import the util module for inheritance

// Inherit the Duplex stream class in Duplexer
util.inherits(Duplexer, stream.Duplex);  

// Define the Duplexer class as a custom Duplex stream
function Duplexer(opt) {
  stream.Duplex.call(this, opt);  // Call the parent constructor (stream.Duplex) with options
  this.data = [];  // Initialize an array to store data written to the stream
}

// Implement the _read() method, required by the Duplex stream
Duplexer.prototype._read = function readItem(size) {
  var chunk = this.data.shift();  // Remove the first item from the data array
  if (chunk === "stop") {  // If the chunk is "stop"
    this.push(null);  // Signal the end of the stream by pushing null
  } else {
    if (chunk) {  // If there is a chunk to read
      this.push(chunk);  // Push the chunk to the readable side of the stream
    } else {  // If no chunk is available
      // Wait for 500 ms and try reading again
      setTimeout(readItem.bind(this), 500, size);  
    }
  }
};

// Implement the _write() method, required by the Duplex stream
Duplexer.prototype._write = function(data, encoding, callback) {
  this.data.push(data);  // Push the incoming data into the data array
  callback();  // Call the callback to signal that the write operation is complete
};

// Create an instance of the Duplexer stream
var d = new Duplexer();

// Set up an event listener for 'data' to read from the stream
d.on('data', function(chunk) {
  console.log('read: ', chunk.toString());  // Output the chunk read from the stream
});

// Set up an event listener for 'end' to signal the end of the stream
d.on('end', function() {
  console.log('Message Complete');  // Output this message when the stream ends
});

// Write data into the stream
d.write("I think, ");
d.write("therefore ");
d.write("I am.");
d.write("Rene Descartes");
d.write("stop");  // Write "stop" to signal the end of the stream
