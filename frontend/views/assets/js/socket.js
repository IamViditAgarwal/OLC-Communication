
// socket connection with server
var socket = io.connect("http://localhost:5000");

socket.on("org_code", (data) => {
    console.log("This is a message", data);
    let code = data[0].locationcode;
    code = code.split('+').join('%2B')
    code = code.split(' ').join('%20');
    mydiv = document.getElementById("messg");
    var orgTag = document.createElement('p');
    orgTag.innerHTML = "Org: "+data[0].organization;
    mydiv.appendChild(orgTag);
    var aTag = document.createElement('a');
    aTag.setAttribute('href', "http://127.0.0.1:8080/map.html?code="+code);
    aTag.innerHTML = "Message : "+data[0].message + " localtion : "+ data[0].locationcode;
    mydiv.appendChild(aTag);
    var brTag = document.createElement('br');
    mydiv.appendChild(brTag);
})
