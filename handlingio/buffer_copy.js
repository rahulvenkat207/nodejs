var alphabet = new Buffer('abcdefghijklmnopqrstuvwxyz');  // Create a Buffer containing the alphabet
console.log(alphabet.toString());  // Output the alphabet as a string

// copy full buffer
var blank = new Buffer(26);  // Create a blank buffer of 26 bytes (same length as the alphabet)
blank.fill();  // Fill the buffer with default values (undefined behavior, likely zeroes or empty)
console.log("Blank: " + blank.toString());  // Output the blank buffer (likely shows nothing or filled symbols)
alphabet.copy(blank);  // Copy the full alphabet buffer to the blank buffer
console.log("Blank: " + blank.toString());  // Output the copied buffer, which now contains the alphabet

// copy part of buffer
var dashes = new Buffer(26);  // Create a buffer of 26 bytes to hold dashes
dashes.fill('-');  // Fill the buffer with dashes ('-')
console.log("Dashes: " + dashes.toString());  // Output the buffer filled with dashes

alphabet.copy(dashes, 10, 10, 15);  // Copy a portion of the alphabet buffer (from position 10 to 15) to the 'dashes' buffer starting at position 10
console.log("Dashes: " + dashes.toString());  // Output the modified dashes buffer

// copy to and from direct indexes of buffers
var dots = new Buffer('-------------------------');  // Create a buffer initialized with dashes
dots.fill('.');  // Fill the buffer with dots ('.')
console.log("dots: " + dots.toString());  // Output the buffer filled with dots

for (var i = 0; i < dots.length; i++) {
  if (i % 2) {  // On every second byte
    dots[i] = alphabet[i];  // Replace dot with corresponding alphabet letter
  }
}
console.log("dots: " + dots.toString());  // Output the modified buffer with alternating dots and alphabet letters
