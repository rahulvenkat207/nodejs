var numbers = new Buffer("123456789");  // Create a buffer containing the string "123456789"
console.log(numbers.toString());  // Output the original buffer as a string ("123456789")

var slice = numbers.slice(3, 6);  // Create a slice of the buffer from position 3 to 6 (indexes are 0-based)
console.log(slice.toString());  // Output the sliced portion ("456")

slice[0] = '#'.charCodeAt(0);  // Replace the first byte of the slice with the ASCII code for '#'
slice[slice.length - 1] = '#'.charCodeAt(0);  // Replace the last byte of the slice with the ASCII code for '#'
console.log(slice.toString());  // Output the modified slice ("#5#")

console.log(numbers.toString());  // Output the original buffer to see how it's affected ("123#5#789")
