// Create a Buffer from the given UTF-8 string, which includes special characters
// \u00b6 (¶ - Pilcrow sign), \u30c6 (テ - Katakana letter TE), \u20ac (€ - Euro sign)
let bufUTF8 = new Buffer("Some UTF8 Text \u00b6 \u30c6 \u20ac", 'utf8');

// Log the entire content of the Buffer as a UTF-8 encoded string
console.log(bufUTF8.toString());  // Output: "Some UTF8 Text ¶ テ €"

// Log a substring of the Buffer, from byte position 5 to 9 (both inclusive), interpreted as UTF-8
console.log(bufUTF8.toString('utf8', 5, 9));  // Output: "UTF8"

// Require the `StringDecoder` module, which helps in decoding Buffer content in chunks, ensuring correct UTF-8 handling
var StringDecoder = require('string_decoder').StringDecoder;

// Create a StringDecoder instance for UTF-8 encoding
var decoder = new StringDecoder('utf8');

// Use the StringDecoder to correctly decode the Buffer and log it
// This handles multi-byte characters better than Buffer’s `toString` method
console.log(decoder.write(bufUTF8));  // Output: "Some UTF8 Text ¶ テ €"
