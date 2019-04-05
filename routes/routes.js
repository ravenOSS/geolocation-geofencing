let express = require('express');
let router = express.Router();
let ctrlr = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlr.frontCtl);

module.exports = router;
