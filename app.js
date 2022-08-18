const express = require('express');
const path = require('path');

let indexRouter = require('./routes/index');
let newMessageRouter = require('./routes/newMessageForm');

const app = express();
app.use(express.urlencoded( { extended: true} ))
app.use(express.json());


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000);

app.use('/', indexRouter)
app.use('/new', newMessageRouter)