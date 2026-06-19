let bets = {}; 
// { roundId: { userId: { amount, cashedOut, cashoutMultiplier } } }

function placeBet(roundId, userId, amount) {
    if (!bets[roundId]) bets[roundId] = {};

    bets[roundId][userId] = {
        amount,
        cashedOut: false,
        cashoutMultiplier: null
    };
}

function cashOut(roundId, userId, multiplier) {
    if (!bets[roundId]?.[userId]) return;

    bets[roundId][userId].cashedOut = true;
    bets[roundId][userId].cashoutMultiplier = multiplier;
}

function getRoundBets(roundId) {
    return bets[roundId] || {};
}

module.exports = { placeBet, cashOut, getRoundBets };
