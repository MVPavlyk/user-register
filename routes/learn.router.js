const {learnController} = require('../controllers');
const router = require('express').Router();


router.post('/', learnController.getData);
router.get('/', learnController.checkConnect);

module.exports = router;