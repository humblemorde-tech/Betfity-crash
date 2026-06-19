const RULES = require("./rules");

let users = {};

function createUser(id) {
    users[id] = { balance: 1000 };
}

function getBalance(id) {
    return users[id]?.balance || 0;
}

function placeBetDeduct(id, amount) {
    if (users[id].balance < amount) {
        return { error: "Insufficient balance" };
    }

    users[id].balance -= amount;
    return { success: true };
}

function addWinnings(id, amount) {
    users[id].balance += amount;
}

module.exports = {
    createUser,
    getBalance,
    placeBetDeduct,
    addWinnings,
    users
};
