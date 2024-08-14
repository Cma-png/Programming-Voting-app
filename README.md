# Voting Web Application 
 `JavaScript` / `React.js` / `Node.js` / `Restful API`

This voting web app allows users to vote on a set of options and view the results in real-time. This document outlines how to set up and run the application.

## Prerequisites

Before running the application, make sure you have Node.js installed on your machine. You can download and install Node.js from [here](https://nodejs.org/en/download).

## Installation

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/yourusername/voting-app.git
cd voting-app
```

## Backend Setup
Navigate to the backend directory and install the necessary packages:
```bash
cd backend
npm install express
```

## Start the backend server:
```bash
node backend.js
```

> note: You should see the output indicating that the server is running: `Server is running on port 3001...`

## Frontend Setup
Open a new terminal window, navigate to the frontend directory, and install the necessary packages:
```bash
cd frontend
npm install
```

## Start the frontend application:
```bash
node frontend.js
```

## Available Endpoints
The backend server provides the following endpoints:

+ GET /poll: Fetch the current poll data including options and vote counts.
+ POST /poll: Submit a vote. Send a POST request with the option ID to increment its count.
+ GET /totalVotes: Get the total number of votes cast so far.
+ GET /thankyou: Receive a thank you message after voting.

Use tools like Postman or your frontend interface to interact with these endpoints.