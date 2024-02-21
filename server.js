const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();
const port = 3000;

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for text search
app.post('/search', (req, res) => {
    const { searchText } = req.body;
    // Placeholder for search logic
    console.log(`Search Text: ${searchText}`);
    res.send(`Search results for: ${searchText}`);
});

// Route for voice search - assumes voice data is sent as a file
app.post('/voice-search', upload.single('voice'), (req, res) => {
    // Placeholder for processing voice file
    console.log(`Received voice file: ${req.file.path}`);
    res.send('Voice search results...');
});

// Route for image search - assumes image data is sent as a file
app.post('/image-search', upload.single('image'), (req, res) => {
    // Placeholder for processing image file
    console.log(`Received image file: ${req.file.path}`);
    res.send('Image search results...');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});