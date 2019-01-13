var router = require('express').Router();
var request = require('request');

router.post('/', (req, res) => {
    let code = req.body.code;
    console.log(code)
    code = code.split('+').join('%2B')
    code = code.split(' ').join('%20');
    console.log('code :',code);
    options = {

    }
    request.get('https://plus.codes/api?encryptkey=AIzaSyA_VKo-vU-DSeY_zj8j5UrJ928Y1lSYlVc', options, function (err, res_key, body) {
        if (err) { } //TODO: handle err
        if (res_key.statusCode !== 200) {
        } else {
            console.log('key :', JSON.parse(res_key.body).key);
            // console.log(encodeURI('https://plus.codes/api?address=' + code + '&ekey=' + JSON.parse(res_key.body).key + '&email='))
            request.get('https://plus.codes/api?address=' + code + '&ekey=' + JSON.parse(res_key.body).key + '&email=', options, function (err, res_data, body) {
                if (err) { } //TODO: handle err
                if (res_data.statusCode !== 200) {
                } else {
                    console.log(res_data.body);
                    let plus_code = JSON.parse(res_data.body).plus_code;
                    let location = plus_code.geometry.location;
                    let best_street_address = plus_code.best_street_address;
                    res.send({best_street_address:best_street_address,location:location});
                }
            });
        }

    });
});

module.exports = router;