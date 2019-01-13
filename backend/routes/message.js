var router = require('express').Router();
var eventHandler = require('../utils/events');
var model = require('../model/db');
let locationdataDB = model.locationdata();
router.post('/',async (req,res)=>{
    console.log(req.body);
    let SMSPhoneNo = req.body.from;
    let SMSMessage = '';
    try {
        SMSMessage = JSON.parse(req.body.message);
        if(SMSMessage.code){
            let locationcode = SMSMessage.code;
            let message = SMSMessage.mssg;
            let organization = SMSMessage.org;
            let phoneNo = SMSPhoneNo;
            await locationdataDB.setlocationdata(locationcode, message, organization, phoneNo);
            eventHandler.emit("message");
        } else {
            throw error("Not a message");
        }
    } catch (error) {
        console.log("errr",error);
    }

    // locationdataDB.insert()
});

module.exports = router;