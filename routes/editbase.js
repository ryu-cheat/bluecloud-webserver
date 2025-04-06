const router = require('express').Router();

const fs = require('fs');
const path = require('path');
router.post('/', async (req, res) => {

    const js = req.body;
    fs.writeFileSync(path.join(__dirname, '..', 'base.js'), 'window.base = ' + JSON.stringify(js, null, 2));
    res.json({});
});

module.exports = router;
