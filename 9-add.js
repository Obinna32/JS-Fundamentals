// Get the command-line arguments (excluding "node" and script path)
const args = process.argv.slice(2);

// Convert the arguments to integers
const num1 = parseInt(args[0], 10);
const num2 = parseInt(args[1], 10);

// Define the add function
function add(a, b) {
    return a + b;
}

// Print the result
console.log(add(num1, num2));
