// Create an array of strings
const lines = ["C is fun", "Python is cool", "JavaScript is amazing"];

// Initialize an empty string to store the output
let output = "";

// Use a loop to concatenate all lines with newline characters
for (let i = 0; i < lines.length; i++) {
    output += lines[i] + "\n";
}

// Print all lines at once
console.log(output);
