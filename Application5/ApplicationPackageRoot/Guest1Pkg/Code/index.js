const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/fetchResignationDetail', function (req, res) {
     const options = {
        url: 'https://api4preview.sapsf.com:443/odata/v2/EmpEmploymentTermination' + req._parsedUrl.search,
        headers: {
            'Authorization': req.headers.authorization
        }
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.status(200).send(body);
        }
    }

    request(options, callback);
});

app.listen(3000, () => console.log("Listening on port 3000..."));

