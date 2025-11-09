// Get the command-line arguments (excluding "node" and script path)
const args = process.argv.slice(2);

// Convert the first argument to an integer
const size = parseInt(args[0], 10);

// Check if the argument is a valid number
if (isNaN(size)) {
    console.log("Missing size");
} else {
    // Loop to print each row of the square
    for (let i = 0; i < size; i++) {
        let row = ""; // Initialize a row
        for (let j = 0; j < size; j++) {
            row += "X"; // Add X for each column
        }
        console.log(row); // Print the row
    }
}
