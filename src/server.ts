import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send("<h1>hello, thing</h1>");
});

app.listen(3000, () => console.log("Server running on port 3000"));
