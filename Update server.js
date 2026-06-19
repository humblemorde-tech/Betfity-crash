io.on("connection", (socket) => {

    // place bet
    socket.on("bet:place", ({ roundId, userId, amount }) => {
        placeBet(roundId, userId, amount);
        placeBetDeduct(userId, amount);
    });

    // cash out
    socket.on("bet:cashout", ({ roundId, userId, multiplier }) => {
        cashOut(roundId, userId, multiplier);
    });

    socket.on("start_game", () => {
        runCrashGame(io);
    });
});
