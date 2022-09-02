const {learnController} = require('../controllers');
const router = require('express').Router();


router.post('/', learnController.getData);

module.exports = router;