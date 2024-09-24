var fs = require('fs');  // Import the file system module

// Define an array of fruits
var fruitBowl = ['apple', 'orange', 'banana', 'grapes'];

// Function to write fruits to the file
function writeFruit(fd) {
  if (fruitBowl.length) {  // Check if there are still fruits to write
    var fruit = fruitBowl.pop() + " ";  // Remove the last fruit and add a space
    // Asynchronously write the fruit to the file
    fs.write(fd, fruit, null, null, function(err, bytes) {
      if (err) {  // Check for errors during writing
        console.log("File Write Failed.");  // Log an error message
      } else {
        console.log("Wrote: %s %d bytes", fruit, bytes);  // Log the written fruit and number of bytes
        writeFruit(fd);  // Call writeFruit again to write the next fruit
      }
    });
  } else {
    fs.close(fd, function(err) {  // Close the file descriptor when done
      if (err) {
        console.log("File Close Failed.");
      } else {
        console.log("File Closed Successfully.");
      }
    });
  }
}

// Open the file 'fruit.txt' for writing
fs.open('fruit.txt', 'w', function(err, fd) {
  if (err) {  // Check for errors during file opening
    console.log("File Open Failed.");
  } else {
    writeFruit(fd);  // Start writing fruits to the file
  }
});
