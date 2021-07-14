const express = require('express');
const main_router = require('./_routes')
const {mongoose,db} = require('./_helpers/_mongoose')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const App = express();
App.use(bodyParser());

App.use(main_router)

App.listen(PORT)