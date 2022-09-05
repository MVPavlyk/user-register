const {sendMail} = require('../services/email.service');
const {config} = require('../config');
module.exports = {
    sendCoupon: async (req, res) => {
        try {
            const {order_status, sender_email} = req.body;


            console.log(req.body);


            if (order_status === 'approved') {
                await sendMail(sender_email, {link: config.PM_COURSE_URL});
            }


            res.json('Coupon sent').status(200);
        } catch (e) {
            console.log(e);
        }
    },

    checkConnect: (req, res) => {
        console.log(req.body);
        console.log(111111111111111111111111111111111111111111111111111);

        res.json('Good connect').status(200);
    }
};