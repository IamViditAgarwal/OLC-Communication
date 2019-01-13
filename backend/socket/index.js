var socket = require('socket.io');
var eventHandler = require('../utils/events');
var socketObj = {};
var model = require('../model/db');
var locationDataDB = model.locationdata();

var arr = require('../utils/arrayHandle');
socketObj.start = function(server){
    console.log("gh");
    var io = socket(server);
    io.on("connection", (socket) => {
        console.log("connection made", socket.id);
        eventHandler.on("message",async ()=>{
            let data;
            console.log("hello");

            if(arr.length > 0){
                arr.pop();
                try {
                    data = await locationDataDB.getlocationdata(1);
                    
                } catch (error) {
                    console.log("ERROR");
                }
                io.sockets.emit("org_code",data);
                console.log(arr.length);
            }
        });
        // // for chat
        // socket.on("chat", (data) => {
        //     console.log(data);
        //     // check for the handle not being empty when data is sent
        //     if (data.handle == "" || data.handle == null) {
        //     } else {
        //         io.sockets.emit("chat", data);
        //     }
        // });
        // // for typing
        // socket.on("typing", (typing_data) => {
        //     console.log(typing_data);
        //     socket.broadcast.emit("typing", typing_data);
        // });
        // // for removing typing when pointer focus out.
        // socket.on("focusout", (data) => {
        //     console.log(data);
        //     socket.broadcast.emit("focusout", data);
        // });
    })
};

module.exports = socketObj;