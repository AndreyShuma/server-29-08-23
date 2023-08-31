const express = require('express');


const router = express.Router();

router.get('/', (req, res) => {
    console.log('Run router');
    res.json({ status : 'ok'});
});

module.exports = router;