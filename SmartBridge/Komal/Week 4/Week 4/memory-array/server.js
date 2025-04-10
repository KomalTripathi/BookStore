const express = require('express');
const app = express();

app.use(express.json());

// In-memory array to store users
let users = [
    { id: 1, name: 'Pushpraj Pandey', email: 'abc@gmail.com' },
    { id: 2, name: 'Ram Sharma', email: 'pqr@gmail.com' }
];

// GET /users - Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// POST /users - Add a new user
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT /users/:id - Update a user by ID
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = users.find(user => user.id === parseInt(id));
    
    if (user) {
        user.name = name;
        user.email = email;
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// DELETE /users/:id - Delete a user by ID
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(user => user.id === parseInt(id));
    
    if (index !== -1) {
        const deletedUser = users.splice(index, 1);
        res.json(deletedUser[0]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Start the server on port 5000
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
