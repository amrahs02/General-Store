const express = require('express');
const router = express.Router();
const { addSmartphone, getSmartphones } = require('../controllers/smartphoneController');

router.post('/add', addSmartphone);
router.get('/', getSmartphones);

module.exports = router;
