// Import the necessary functions from database.js
import { connectToDatabase, searchDatabase } from './database.js';

// Function to send a message
function sendMessage() {
    // Get the input text from the input field
    const inputText = document.getElementById('inputData').value;

    // Process the input, check spelling, etc. (Use your existing functions)
    processInput(inputText);
}

// Function to process input, including database search
async function processInput(inputText) {
    try {
        // Establish a database connection
        await connectToDatabase();

        // Perform a database search based on the input text
        const results = await searchDatabase(inputText);

        // Display the results in the chat interface
        if (results.length > 0) {
            for (const result of results) {
                receiveMessage(`Result: ${result}`);
            }
        } else {
            receiveMessage('No results found.');
        }
    } catch (error) {
        console.error('Error processing input:', error);
        // Handle errors, e.g., display a user-friendly message to the user
    }
}

// Function to receive and display a message in the chat interface
function receiveMessage(text) {
    const chat = document.querySelector('.chat');
    const message = document.createElement('div');
    message.classList.add('message', 'received');
    message.innerHTML = `<div class="text">${text}</div>`;
    chat.appendChild(message);
    chat.scrollTop = chat.scrollHeight; // Auto-scroll to the bottom

    // Clear the input field after processing and displaying the message
    document.getElementById('inputData').value = '';
}
