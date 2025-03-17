const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Us</h1><p>We are learning Express.js!</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Us</h1><p>Email: contact@example.com</p>");
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});