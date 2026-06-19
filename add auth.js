const ADMIN_KEY = "BETFITY_ADMIN_2026";

function isAdmin(key) {
    return key === ADMIN_KEY;
}

module.exports = { generateToken, verifyToken, isAdmin };
