var express = require('express');
var router = express.Router();
const etudiantCtl = require('../controllers/etudiant');


/* Get ALL Student*/
router.get('/' , etudiantCtl.getAllStudent);

/** Post Create Bug */
router.post('/add' , etudiantCtl.createStudent);

module.exports = router;