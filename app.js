const express = require('express');
const app = express();
const helmet = require('helmet');
const port = 3000;

const indexRouter = require('./js/router/index');
app.use(helmet());
app.use('/',indexRouter);

//mid


//conf

//define



app.listen(port,() => console.log(`Run in ${port}`));


