//your JS code here. If required.
// Function to create a promise that resolves after a delay
function delay(ms, value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, ms);
    });
}

// Function to handle the transformations
function processNumber() {
    const inputElement = document.getElementById('ip');
    const outputElement = document.getElementById('output');
    const inputValue = Number(inputElement.value);

    // Initial promise: resolve after 2 seconds with the input value
    delay(2000, inputValue)
        .then((result) => {
            outputElement.textContent = `Result: ${result}`;
            return delay(2000, result * 2); // Multiply by 2
        })
        .then((result) => {
            outputElement.textContent = `Result: ${result}`;
            return delay(1000, result - 3); // Subtract 3
        })
        .then((result) => {
            outputElement.textContent = `Result: ${result}`;
            return delay(1000, result / 2); // Divide by 2
        })
        .then((result) => {
            outputElement.textContent = `Result: ${result}`;
            return delay(1000, result + 10); // Add 10
        })
        .then((result) => {
            outputElement.textContent = `Final Result: ${result}`;
        });
}

// Add event listener to the button
document.getElementById('btn').addEventListener('click', processNumber);