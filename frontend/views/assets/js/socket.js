
// socket connection with server
var socket = io.connect("http://localhost:5000");

socket.on("org_code",(data)=>{
    console.log("This is a message");
})
