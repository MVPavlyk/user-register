const {sendMail} = require('../services/email.service');
const {config} = require('../config');
module.exports = {
    sendCoupon: async (req, res) => {
        try {
            const {product_id, order_status, sender_email} = req.body;


            console.log(req.body);


            if (order_status === 'approved') {
                if(product_id === 'pmCourse') {
                    await sendMail(sender_email, {link: config.PM_COURSE_URL, title: "IT Project Management"});
                }else if(product_id === 'tmCourse') {
                    await sendMail(sender_email, {link: config.TM_COURSE_URL, title: "Text Mining"});
                }

            }


            res.json('Coupon sent').status(200);
        } catch (e) {
            console.log(e);
        }
    },

    checkConnect: (req, res) => {
        console.log(req.body);
        console.log(11111111111111111111111111111111111111111111111111);

        res.json('Good connect').status(200);
    }
};