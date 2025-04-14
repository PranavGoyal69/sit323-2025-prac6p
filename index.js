// Using the fetch API to communicate with the calculator microservice
const baseURL = "http://localhost:3001"; // Adjust to your server's URL

// Function to fetch result from the server for the 'add' operation
async function addNumbers(num1, num2) {
    const response = await fetch(`${baseURL}/add?num1=${num1}&num2=${num2}`);
    const data = await response.json();
    return data;
}

// Function to fetch result from the server for the 'subtract' operation
async function subtractNumbers(num1, num2) {
    const response = await fetch(`${baseURL}/subtract?num1=${num1}&num2=${num2}`);
    const data = await response.json();
    return data;
}

// Function to fetch result from the server for the 'multiply' operation
async function multiplyNumbers(num1, num2) {
    const response = await fetch(`${baseURL}/multiply?num1=${num1}&num2=${num2}`);
    const data = await response.json();
    return data;
}

// Function to fetch result from the server for the 'divide' operation
async function divideNumbers(num1, num2) {
    const response = await fetch(`${baseURL}/divide?num1=${num1}&num2=${num2}`);
    const data = await response.json();
    return data;
}

// Function to handle the operation and display result
async function performOperation(operation, num1, num2) {
    try {
        let result;
        switch (operation) {
            case 'add':
                result = await addNumbers(num1, num2);
                break;
            case 'subtract':
                result = await subtractNumbers(num1, num2);
                break;
            case 'multiply':
                result = await multiplyNumbers(num1, num2);
                break;
            case 'divide':
                result = await divideNumbers(num1, num2);
                break;
            default:
                console.log("Invalid operation");
                return;
        }

        if (result.error) {
            console.error(`Error: ${result.error}`);
        } else {
            console.log(`Result: ${result.result}`);
        }
    } catch (error) {
        console.error("Something went wrong: ", error);
    }
}

// Example of performing an operation
performOperation('add', 5, 3);  // Replace 'add' with 'subtract', 'multiply', or 'divide' for other operations
