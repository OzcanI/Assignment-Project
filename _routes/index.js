const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    return res.send('<a href="https://github.com/OzcanI/Assignment-Project">Please Find Documentation At</a>')
})
router.use('/users', require('./user_router'))

module.exports = router; 