const express   = require('express');
const router    = express.Router();

router.get('/', (req, res) => {
    return res.send({message: 'Olá GET :D'});
});

router.post('/', (req, res) => {
    return res.send({message: 'Olá POST :D'});
});

module.exports = router;