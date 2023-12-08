import express, { Express } from "express";

const PORT = 3000;

const server: Express = express()

server.get("/", (req, res) => {
    res.send("Hello Technische Hochschule Mittelhessen!");
})

server.listen(PORT, () => {
    console.log(`Server startet on PORT ${PORT}`)
})