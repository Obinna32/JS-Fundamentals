// Get the command-line arguments (excluding "node" and script path)
const args = process.argv.slice(2);

// Convert the first argument to an integer
const num = parseInt(args[0], 10);

// Check if conversion was successful
if (isNaN(num)) {
    console.log("Not a number");
} else {
    console.log("My number: " + num);
}
