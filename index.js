'use strict';

const express = require('express');
const fs = require('fs');
const app = express();

app.get('/get_meta_data/*', function(req, res) {
    fs.readFile('ui-config/specification' + req.originalUrl.substring(req.originalUrl.indexOf('/', 1)) + '.json', function(err, data) {
        if (err) res.send('Error occurred! Invalid path');
        else res.send(JSON.parse(data));
    });
});

app.listen(3000);