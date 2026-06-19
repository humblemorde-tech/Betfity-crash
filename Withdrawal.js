let withdrawals = [];
let idCounter = 1;

function requestWithdrawal(userId, amount) {
    const request = {
        id: idCounter++,
        userId,
        amount,
        status: "pending"
    };

    withdrawals.push(request);
    return request;
}

function getWithdrawals() {
    return withdrawals;
}

function approveWithdrawal(id) {
    const w = withdrawals.find(x => x.id === id);
    if (w) w.status = "approved";
    return w;
}

function rejectWithdrawal(id) {
    const w = withdrawals.find(x => x.id === id);
    if (w) w.status = "rejected";
    return w;
}

module.exports = {
    requestWithdrawal,
    getWithdrawals,
    approveWithdrawal,
    rejectWithdrawal
};
