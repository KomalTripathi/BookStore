const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running on port 5000');
});

// Correct /welcome route
app.get('/welcome', (req, res) => {
    res.json({ message: "Welcome to Express!" });
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000/welcome');
});
