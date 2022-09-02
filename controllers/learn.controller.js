const {sendMail} = require('../services/email.service');
module.exports = {
    getData: async (req, res) => {
        try {
            // console.log(req.body);
            const {order_status, sender_email} = req.body;


            if (order_status === 'approved') {
                await sendMail(sender_email);
            }


            res.json('Coupon sent').status(200);
        } catch (e) {
            console.log(e);
        }
    },

    checkConnect: (req, res) => {
        console.log(req.body);
        console.log(1111111111111111111111111111111111111111111111111111);

        res.json('Good connect').status(200);
    }
};