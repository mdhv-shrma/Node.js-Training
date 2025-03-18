const express = require("express");
const app = express();


app.set("view engine", "ejs");

const items = ["Apple", "Banana", "Cherry", "Mango"];

app.get("/", (req, res) => {
  res.render("items", { items });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
