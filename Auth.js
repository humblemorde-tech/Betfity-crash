const jwt = require("jsonwebtoken");

const SECRET = "BETFITY_SECRET_KEY_CHANGE_THIS";

function generateToken(user) {
    return jwt.sign(
        { username: user.username },
        SECRET,
        { expiresIn: "2h" }
    );
}

function verifyToken(token) {
    try {
        return jwt.verify(token, SECRET);
    } catch (err) {
        return null;
    }
}

module.exports = { generateToken, verifyToken };
