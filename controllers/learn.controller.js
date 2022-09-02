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

    checkConnect: (req, res) => {
        console.log(req.body);
        console.log(1111111111111111111111111111111111111111111111111111);

        res.json('Good connect').status(200)
    }
};