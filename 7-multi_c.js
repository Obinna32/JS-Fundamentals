// Get the command-line arguments (excluding "node" and script path)
const args = process.argv.slice(2);

// Convert the first argument to an integer
const count = parseInt(args[0], 10);

// Check if the argument is a valid number
if (isNaN(count)) {
    console.log("Missing number of occurrences");
} else {
    // Initialize an empty string to accumulate lines
    let output = "";

    // Use a loop to add "C is fun" x times
    for (let i = 0; i < count; i++) {
        output += "C is fun\n";
    }

    // Print all occurrences at once
    console.log(output);
}
