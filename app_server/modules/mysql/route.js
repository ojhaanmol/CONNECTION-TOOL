const express = require('express');

const { controller_middleware } = require('../../middleware/controller');
const { getMysqlTest, showMysqlTest } = require('./controller');

const router = express.Router();

router.get('/mysqlStatus',controller_middleware(getMysqlTest));
router.post('/mysqlStatus',controller_middleware(showMysqlTest));

module.exports = router;