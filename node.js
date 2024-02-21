const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/database.js', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a simple schema and model (you can adjust this based on your needs)
const Message = mongoose.model('Message', {
    sender: String,
    content: String,
});

app.post('/api/message', async (req, res) => {
    const userMessage = req.body.message;

    // Save user message to the database
    await Message.create({ sender: 'user', content: userMessage });

    // Process the user message here and generate a response
    const reply = processMessage(userMessage);

    // Save the system response to the database
    await Message.create({ sender: 'Bard', content: reply });

    res.json({ reply });
});

function processMessage(message) {
    // Implement your logic to generate a reply based on the user message
    return "This is a sample reply.";
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
