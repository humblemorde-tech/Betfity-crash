function generateCrashPoint() {
    return Math.max(1, (Math.random() ** 2) * 30);
}

function runCrashGame(io) {
    let multiplier = 1.0;
    let crashPoint = generateCrashPoint();

    io.emit("game:start", { name: "Betfity Crash" });

    const interval = setInterval(() => {
        multiplier += 0.05;

        io.emit("game:update", {
            multiplier: multiplier.toFixed(2)
        });

        if (multiplier >= crashPoint) {
            clearInterval(interval);

            io.emit("game:crash", {
                crashPoint: crashPoint.toFixed(2)
            });
        }
    }, 100);
}

module.exports = { runCrashGame };
