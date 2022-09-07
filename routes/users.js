var express = require('express');
var router = express.Router();
var userCtl = require('../controllers/user')
/* GET users listing. */
router.post('/', userCtl.addUser);

module.exports = router;
