// Create an array of strings
const lines = ["C is fun", "Python is cool", "JavaScript is amazing"];

// Initialize an empty string to accumulate the lines
let output = "";

// Use a loop to go through the array
for (let i = 0; i < lines.length; i++) {
    output += lines[i] + "\n"; // Add each line and a newline character
}

// Print all lines at once
console.log(output);
