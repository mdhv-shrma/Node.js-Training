const express = require('express');
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));

const users = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'signup.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});


app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        users.push({ name, email, hashedPassword });

        res.send(`<h2>Signup successful!</h2>
                  <p>Name: ${name}</p>
                  <p>Email: ${email}</p>
                  <a href="/login">Go to Login</a>`);
    } catch (error) {
        res.status(500).send('Error hashing password');
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email);

    if (!user) {
        return res.status(400).send('User not found. Please sign up first.');
    }

    const isMatch = await bcrypt.compare(password, user.hashedPassword);

    if (isMatch) {
        res.send(`<h2>Login successful!</h2>
                  <p>Welcome, ${user.name}!</p>`);
    } else {
        res.status(400).send('Incorrect password. Try again.');
    }
});

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});
