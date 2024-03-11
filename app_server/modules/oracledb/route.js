const express = require('express');
const { controller_middleware } = require('../../middleware/controller');
const { getOracledbStatusCheck,showOracledbStatusCheck } = require('./controller');

const router = express.Router();

router.get('/fetchOracledbStatus',controller_middleware(getOracledbStatusCheck));
router.post('/fetchOracledbStatus',controller_middleware(showOracledbStatusCheck));

module.exports = router;