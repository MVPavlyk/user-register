const {sendMail} = require('../services/email.service');
module.exports = {
    getData: async (req, res) => {
        try {
            console.log(req.body);

            await sendMail(req.body.email);

            res.json('Coupon sent').status(200);
        } catch (e) {
            console.log(e);
        }
    },

    checkConnect: (res) => {
        res.json('Good connect').status(200)
    }
};