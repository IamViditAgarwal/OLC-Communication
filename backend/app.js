var express = require('express');
app = express();
var bodyParser = require('body-parser');
var model = require('./model/db');
var socketObj = require('./socket/index');

// ----- Cross Origin Access | Start | -----
var cors = require('cors');
app.use(cors({origin: '*'}));
// ----- Cross Origin Access | End | -----

// ----- Body Parser for POST Data | Start | -----
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// ----- Body Parser for POST Data | End | -----

app.get('/', (req, res) => {
    console.log("hjsd")
    res.send('this is post respose1')
});

app.post('/', (req, res) => {
    console.log(req.body);
    console.log("hi this is post")
    res.send('this is post respose')
});

// Routes
// app.use('/', require('./routes/index'));
// app.use('/users', require('./routes/users'));
app.use('/message', require('./routes/message'));
// app.use('/org',require('./routes/org'));


locationdataDB = model.locationdata();

let hello = async function () {
    try {
        let data = await locationdataDB.getlocationdata(1);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
hello();
const PORT = process.env.PORT || 5000;
var server = app.listen(PORT, console.log(`Server started on port ${PORT}`));
// ----- sockets | Start | -----
socketObj.start(server);
// ----- sockets | End | -----