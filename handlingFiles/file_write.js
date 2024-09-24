var fs = require('fs');  // Import the file system module

// Define a configuration object
var config = {
  maxFiles: 20,          // Maximum number of files
  maxConnections: 15,    // Maximum number of connections
  rootPath: "/webroot"   // Root path for the web server
};

// Convert the configuration object to a JSON string
var configTxt = JSON.stringify(config);

// Define options for writing the file
var options = { encoding: 'utf8', flag: 'w' };  // UTF-8 encoding and write flag

// Write the JSON string to a file named 'config.txt'
fs.writeFile('config.txt', configTxt, options, function(err) {
  if (err) {  // Check for errors during the write operation
    console.log("Config Write Failed.");  // Log a failure message
  } else {
    console.log("Config Saved.");  // Log a success message
  }
});
