var express = require('express');
var cors = require('cors');
var logger = require('morgan');

var apiRouter = require('./routes');
var errores = require('./middlewares/errores');
const corsEndpoint = process.env.CORS_PORT;

var app = express();
app.use(logger('dev'));
app.use(cors({
  origin: [corsEndpoint],
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route -> controller -> model, y la respuesta vuelve como JSON
app.use('/api', apiRouter);


app.use(errores.noEncontrado);
app.use(errores.manejador);

module.exports = app;
