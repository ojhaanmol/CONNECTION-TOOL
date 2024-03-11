const express = require('express');
const { controller_middleware } = require('../../middleware/controller');
const { getRedisStatusCheck } = require('./controller');

const router = express.Router();

router.get('/fetchRedisStatus',controller_middleware(getRedisStatusCheck));

module.exports = router;