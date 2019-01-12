var router = require('express').Router();
var eventHandler = require('../utils/events');

router.post('/',(req,res)=>{
    console.log(req.body.message);
    eventHandler.emit("message");
});

module.exports = router;