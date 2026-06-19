const RULES = require("./rules");

let users = {};

function createUser(id) {
    users[id] = { balance: 0 };
}

function deposit(id, amount) {
    if (amount < RULES.MIN_DEPOSIT) {
        return { error: "Minimum deposit is 50 KES" };
    }

    users[id].balance += amount;
    return { success: true, balance: users[id].balance };
}

function withdraw(id, amount) {
    if (amount < RULES.MIN_WITHDRAW) {
        return { error: "Minimum withdrawal is 100 KES" };
    }

    if (users[id].balance < amount) {
        return { error: "Insufficient balance" };
    }

    users[id].balance -= amount;
    return { success: true, balance: users[id].balance };
}

module.exports = { createUser, deposit, withdraw };
