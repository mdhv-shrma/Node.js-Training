const express = require("express");
const url = require("url");
const app = express();


app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Home Page</h1>");
  
});

app.get("/user/:name", (req,res)=>{
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
})

app.get("/about", (req, res) => {
  res.send("<h1>About Us</h1><p>about page</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Us</h1><p>Email: contact@example.com</p>");
});

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});