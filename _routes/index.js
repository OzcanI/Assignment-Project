const express = require('express');
const router = express.Router();

router.use('/users', require('./user_router'))

module.exports = router;