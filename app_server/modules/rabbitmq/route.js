const express = require('express');
const { controller_middleware } = require('../../middleware/controller');
const { getRabbitmqStatusCheck,showRabbitmqStatusCheck } = require('./controller');

const router = express.Router();

router.get('/fetchRabbitmqStatus',controller_middleware(getRabbitmqStatusCheck));
router.post('/fetchRabbitmqStatus',controller_middleware(showRabbitmqStatusCheck));

module.exports = router;