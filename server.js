const express = require('express');
const app = express();
const port = 3001;

// Middleware to parse JSON requests
app.use(express.json());

// General validation function for common errors
function validateParams(num1, num2) {
    if (!num1 || !num2) {
        return { error: 'Both num1 and num2 are required' };
    }
    if (isNaN(num1) || isNaN(num2)) {
        return { error: 'Both num1 and num2 must be valid numbers' };
    }
    return null;
}

// Addition endpoint
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    const validationError = validateParams(num1, num2);
    if (validationError) {
        return res.status(400).json(validationError);
    }
    res.json({ result: parseFloat(num1) + parseFloat(num2) });
});

// Subtraction endpoint
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    const validationError = validateParams(num1, num2);
    if (validationError) {
        return res.status(400).json(validationError);
    }
    res.json({ result: parseFloat(num1) - parseFloat(num2) });
});

// Multiplication endpoint
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    const validationError = validateParams(num1, num2);
    if (validationError) {
        return res.status(400).json(validationError);
    }
    res.json({ result: parseFloat(num1) * parseFloat(num2) });
});

// Division endpoint
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    const validationError = validateParams(num1, num2);
    if (validationError) {
        return res.status(400).json(validationError);
    }
    if (parseFloat(num2) === 0) {
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }
    res.json({ result: parseFloat(num1) / parseFloat(num2) });
});

// Start the server
app.listen(port, () => {
    console.log(`Calculator microservice running at http://localhost:${port}`);
});
