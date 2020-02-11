const express = require('express');
const router = express.Router();


router.get('/',function (req,res,next) {
    res.json({beta:1});
});


module.exports = router;