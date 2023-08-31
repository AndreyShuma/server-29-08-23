const express = require('express');


const router = express.Router();

const peoples = [
    {id:1, name: 'Andrey', age: 40},
    {id:2, name: 'Sveta', age: 30},
    {id:3, name: 'Oksana', age: 50},
]

router.get('/', (req, res) => {
    console.log('Run router');
    res.json(peoples);
});

module.exports = router;