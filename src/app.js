const express = require('express');
const app = express();
const {sequelize} = require('./database/models/index');

let indexRouter = require('./routes/index');
let moviesRouter = require('./routes/movies');
let charactersRouter = require('./routes/characters');

app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use('/', indexRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/characters', charactersRouter);

//start server
app.listen(app.get('port'), () => {
  console.log(`Server on port http://localhost:${app.get('port')}/`);
  sequelize.sync({force: true}).then(() => {
    console.log('Se ha establecido la conexión');
  }).catch(res=> console.log(res));
});
