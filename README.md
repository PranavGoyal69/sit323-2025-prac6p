<<<<<<< HEAD
# sit323-2025-prac4c
=======
Simple Calculator Microservice

Overview

This microservice provides basic calculator functionality via a REST API. It supports addition, subtraction, multiplication, and division operations.

Technologies Used

Node.js

Express.js

Git & GitHub

Features

Accepts two numerical input parameters (num1 and num2).

Performs basic arithmetic operations:

Addition (/add)

Subtraction (/subtract)

Multiplication (/multiply)

Division (/divide)

Error handling for invalid inputs.

Installation & Setup

Prerequisites

Ensure you have the following installed on your system:

Node.js

Git

Clone the Repository

git clone https://github.com/PranavGoyal69/sit323-2025-prac4p.git
cd sit323-2025-prac4p

Install Dependencies

npm install

Run the Microservice

node server.js

API Endpoints

Method

Endpoint

Parameters

Description

GET

/add

num1, num2

Returns num1 + num2

GET

/subtract

num1, num2

Returns num1 - num2

GET

/multiply

num1, num2

Returns num1 * num2

GET

/divide

num1, num2

Returns num1 / num2 (Handles division by zero)

Example Usage

GET http://localhost:3000/add?num1=10&num2=5
Response: { "result": 15 }

Error Handling

If num1 or num2 is missing or not a number, the API returns a 400 error.

If attempting division by zero, the API returns a relevant error message.
>>>>>>> 6d9fa94 (Initial commit with calculator microservice)
