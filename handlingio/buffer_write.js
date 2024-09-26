buf256 = new Buffer(256);  // Creates a new Buffer of 256 bytes.
buf256.fill(0);  // Fills the entire Buffer with zeroes.
buf256.write("add some text");  // Writes the string "add some text" starting at byte 0.
console.log(buf256.toString());  // Converts the Buffer to a string and logs it.

buf256.write("more text", 9, 9);  // Writes "more text" starting at byte 9 for 9 bytes.
console.log(buf256.toString());  // Logs the updated Buffer as a string.

buf256[18] = 43;  // Directly sets the byte at position 18 to 43 (which corresponds to '+').
console.log(buf256.toString());  // Logs the updated Buffer as a string.
