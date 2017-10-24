const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    mongooseConnection = require('./database/dbConnect').connection;

const app = express();

app.use(express.static(__dirname + '/../dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apiRoutes = require('./routes/api/routes')(app);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(3000, err => {
    if (err) {
        return console.error('error', err);
    }

    console.log('server is litening on 3000');
})
