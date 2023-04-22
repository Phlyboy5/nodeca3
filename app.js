const express = require('express');
const morgan = require('morgan');
const trackerRouter = require('./router/trackerRouter');
const app = express();

//MIDDLEWARES
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/public`))
//3) ROUTES
    app.use('/exp' , trackerRouter);
module.exports = app;