const bcrypt = require("bcryptjs");

let users = {};

function register(username, password) {
    if (users[username]) {
        return { error: "User already exists" };
    }

    const hashed = bcrypt.hashSync(password, 10);

    users[username] = {
        username,
        password: hashed,
        balance: 1000 // demo starting balance
    };

    return { success: true };
}

function login(username, password) {
    const user = users[username];
    if (!user) return { error: "User not found" };

    const valid = bcrypt.compareSync(password, user.password);
    if (!valid) return { error: "Invalid password" };

    return { success: true, user };
}

function getUser(username) {
    return users[username];
}

module.exports = { register, login, getUser };
