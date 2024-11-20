const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
app.listen(PORT, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
});