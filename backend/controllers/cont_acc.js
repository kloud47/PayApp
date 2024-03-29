const { Account } = require('../db');
const mongoose = require('mongoose');

exports.getBalance = async (req, res) => {
    const account = Account.findOne({ userID: req.userID });

    res.json({
        msg: "Your balance",
        balance: account.balance
    })
};

exports.postTransfer = async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body;

    const accountFrom = await Account.findOne({ userID: req.userID });

    if (!accountFrom || accountFrom.balance < amount) {
        await session.abortTransaction();
        return res.json({
            msg: "Insufficient balance"
        });
    }
    
    const accountTo = await Account.findOne({ userID: to });
    
    if (!accountTo) {
        await session.abortTransaction();
        return res.json({
            msg: "Account does not exist"
        });
    }

    await Account.updateOne({userID: req.userID}, {$inc: {balance: -amount}});
    await Account.updateOne({userID: to}, {$inc: {balance: amount}});

    await session.commitTransaction();

    res.json({
        msg: "Transfer successful"
    });
};