const express = require('express');
const app = express();
const {sequelize} = require('./database/models/index');
require('dotenv').config();

let authRouter = require('./routes/auth');
let moviesRouter = require('./routes/movie');
let charactersRouter = require('./routes/character');
let genreRouter = require('./routes/genre');

app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use('/api/', authRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/characters', charactersRouter);
app.use('/api/genres', genreRouter);

//start server
app.listen(app.get('port'), () => {
  sequelize
    .sync({force: false})
    .then(() => {
      console.clear();
      console.log('Se ha establecido la conexión');
      console.log(`Server on port http://localhost:${app.get('port')}/`);
    })
    .catch((res) => console.error(res));
});
