const express = require('express');
const { addGadget, getGadgets } = require('../controllers/gadgetcontrollers');
const router = express.Router();



router.post('/add', addGadget);
router.get('/', getGadgets);

module.exports = router;