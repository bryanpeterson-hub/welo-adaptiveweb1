const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files (HTML, CSS, images) from the root directory
app.use(express.static(__dirname));

// Specific route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Specific route for the solutions page
app.get('/solutions.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'solutions.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
