const express = require("express");
const path = require("path");

const app = express();
const port = 32;

// Serve static files from "public" folder
app.use(express.static("src/app"));

// Route to serve page.js directly
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src/app", "index.html"));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
