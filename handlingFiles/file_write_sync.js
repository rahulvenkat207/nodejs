var fs = require('fs');  // Import the file system module

// Define an array of vegetables
var veggieTray = ['carrots', 'celery', 'olives'];

// Open a file named 'veggie.txt' for writing synchronously
var fd = fs.openSync('veggie.txt', 'w');

// Loop until the veggieTray is empty
while (veggieTray.length) {
  var veggie = veggieTray.pop() + " ";  // Remove the last vegetable from the tray and add a space
  var bytes = fs.writeSync(fd, veggie, null, null);  // Write the vegetable to the file
  console.log("Wrote %s %d bytes", veggie, bytes);  // Log the vegetable and the number of bytes written
}

// Close the file descriptor
fs.closeSync(fd);
