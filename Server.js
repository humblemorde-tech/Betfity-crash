const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const { runCrashGame } = require("./src/games/crash");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: { origin: "*" }
});

app.get("/", (req, res) => {
    res.send("BETFITY CRASH SERVER RUNNING");
});

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("start_game", () => {
        runCrashGame(io);
    });
});

server.listen(5000, () => {
    console.log("Betfity server running on port 5000");
});
