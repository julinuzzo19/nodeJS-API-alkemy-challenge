const express = require('express');
const app = express();
const {sequelize} = require('./database/models/index');

let indexRouter = require('./routes/index');
let moviesRouter = require('./routes/movies');
let charactersRouter = require('./routes/characters');
let genreRouter = require('./routes/genre');

app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use('/', indexRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/characters', charactersRouter);
app.use('/api/genres', genreRouter);

//start server
app.listen(app.get('port'), () => {
  
  sequelize
    .sync({force: false})
    .then(() => {
      console.log('Se ha establecido la conexión');
      console.log(`Server on port http://localhost:${app.get('port')}/`);
    })
    .catch((res) => console.log(res));
});
