var express = require('express');
var router = express.Router();
const coursCtl = require('../controllers/cours');


/* Get ALL Studiant*/
router.get('/' , coursCtl.getAllCours);
/** Post Create Bug */
router.post('/add' , coursCtl.createCours);

module.exports = router;