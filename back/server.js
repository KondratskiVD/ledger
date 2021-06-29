const path = require('path')
const cors = require('cors');
const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
// import sequelize from 'db_connect'

const bodyParser = require('body-parser');
const app = express()
app.set('port', process.env.SERVER_PORT);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(cors());


app.use('/api/auth', require('./controllers/auth'));


app.listen(app.get('port'), () => {
    console.log(`[OK] Server is running on localhost:${app.get('port')}`);
});
