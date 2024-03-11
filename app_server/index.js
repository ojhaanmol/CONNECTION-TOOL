const bodyParser = require('body-parser');
const path = require('path')
const morgan = require('morgan');
const cors = require('cors');
const express = require('express');

const app  = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb', extended: true}));

app.use(express.static('/home/anmolkumar/Desktop/CONNECTION_TOOL/app/app/build/'));

// app.get('*', (req, res) => {
//     res.sendFile('/home/anmolkumar/Desktop/CONNECTION_TOOL/app/app/build/');
//   });
app.use(require('./modules/rabbitmq/route'));
app.use(require('./modules/redis/route'));
app.use(require('./modules/mysql/route'));
app.use(require('./modules/oracledb/route'))

app.listen(12300,()=>{
    console.log('Your Tester app is running on Address:\n   http://localhost:12300')
})