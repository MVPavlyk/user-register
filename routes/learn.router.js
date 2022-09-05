const {learnController} = require('../controllers');
const router = require('express').Router();


router.post('/', learnController.sendCoupon);
router.get('/', learnController.checkConnect);

module.exports = router;