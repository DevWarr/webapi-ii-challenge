const express = require("express");

const postsRouter = require("./routes/posts-router");

const server = express();
server.use(express.json());
server.use("/api/posts", postsRouter);

server.get("/", (req, res) => {
    res.status(200).json({message: "Hello, friend!"});
})

const port = 2019
server.listen(port, () => console.log(`\n=== We're live, on port ${port}! ===\n`))