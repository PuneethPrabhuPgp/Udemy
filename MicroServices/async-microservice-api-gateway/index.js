const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const https = require('https');
const fs = require('fs');

const router = require('./router');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(router);
const server = https.createServer(options, app);


server.listen(3000, () => {
  console.log('app is listening at port 3000');
});
