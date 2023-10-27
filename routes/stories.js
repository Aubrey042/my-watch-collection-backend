const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.send('This is the stories page.')  
});

router.post('/',(req,res) => {

});

module.exports = router;