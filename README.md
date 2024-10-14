Full-Stack MERN Application
 Final Project Sharath Chandra
This project is a full-stack MERN-based application that integrates various assignments from my coursework into one cumulative project. Each section of the project demonstrates different skills, from basic JavaScript to working with MongoDB, APIs, and building a front-end with React + Vite. All code is contained in this repository and is well-documented to help understand the reasoning behind the decisions made.

**Project Structure**
The repository is organized into the following directories:

/hello-world     - Contains the basic JavaScript "Hello World" program.
/mongodb         - Contains MongoDB scripts for a sports team collection and queries.
/api-tests       - Contains Postman API request tests and screenshots.
/frontend        - Contains the front-end React + Vite application, which interacts with the Bible verse API.
Detailed Structure
/hello-world: This folder contains a simple JavaScript program that prints "Hello World" to the console. It's the starting point for the project and was used to initialize the repository and GitHub setup.

/mongodb:

Contains MongoDB queries to interact with a collection representing a cricket team. The collection stores player information, and the queries perform Create, Read, Update, and Delete (CRUD) operations.
The folder includes five MongoDB queries that showcase typical operations on the team data.
/api-tests:

Contains screenshots and details of API tests using Postman.
Includes a GET request to the PokéAPI and a POST request to a mock API, demonstrating proficiency in interacting with APIs.
/frontend:

A React + Vite application that interacts with a public Bible verse API.
The app includes two features: fetching a random Bible verse and retrieving a specific verse (e.g., John 3:16).
This front-end is styled for simplicity and demonstrates basic interaction with a RESTful API.

How to Run the Application Locally
Prerequisites
Node.js and npm should be installed on your machine.
MongoDB should be installed if you'd like to run the MongoDB part locally.
Postman is required to test API requests locally.
Clone this repository to your local machine
git clone https://github.com/Sharath921/mern-final-project.git

**Running the "Hello World" Program**
cd hello-world
node hello.js

Running the MongoDB Queries
Ensure MongoDB is running locally.
Import the cricket team collection into your local MongoDB instance.
Open the MongoDB shell or a GUI like MongoDB Compass and execute the queries in the /mongodb directory.
Running the Front-End Application (React + Vite)
Navigate to the frontend directory:


Running API Tests in Postman
Open Postman and import the Postman collection found in /api-tests.
Run the saved GET and POST requests, or create new requests to test the APIs further.
Purpose of Each Assignment
1. "Hello World" Program
This was the first step in creating a JavaScript program and getting familiar with GitHub. The purpose was to establish the repository and ensure the project structure was set up correctly.
2. MongoDB Collection
The MongoDB collection represents a team of cricket players and showcases basic CRUD operations using a NoSQL database. This assignment demonstrates my ability to work with MongoDB and query data effectively.
3. Postman API Tests
API testing with Postman was used to demonstrate the ability to interact with different APIs. The tests included making GET requests to a public API (PokéAPI) and submitting data through POST requests. These are essential skills for backend and API development.
4. Front-End Application
This assignment integrates React, Vite, and a public Bible verse API to build a simple front-end application. It demonstrates the ability to build and style a functional user interface, interact with external APIs, and create components that dynamically fetch and display data.
Conclusion
This project serves as a culmination of several assignments and demonstrates a variety of skills in JavaScript, MongoDB, API interaction, and front-end development. Each part of the project is documented with comments and explanations to help you understand not just what the code does, but why it was written in a particular way.

