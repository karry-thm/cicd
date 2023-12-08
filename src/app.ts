import express, { Express } from "express";

const PORT = 3000;

const server: Express = express()

server.get("/", (req, res) => {
    res.send("Hello THM!");
})

server.listen(PORT, () => {
    console.log(`Server startet on PORT ${PORT}`)
})