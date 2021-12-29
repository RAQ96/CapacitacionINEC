const express = require('express');
const app = express();
const morgan=require('morgan');

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middleware
app.use(require('./routes/index'));
app.use(morgan('dev'));

//Iniciando el servidor, escuchando...
app.listen(app.get('port'),()=>{
  console.log(`Server listening on port ${app.get('port')}`);
});