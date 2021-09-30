const express = require('express');
const app = express();
require('dotenv').config();
const {seedingDb} = require('./database/seeders/seeds');

let authRouter = require('./routes/auth');
let moviesRouter = require('./routes/movie');
let charactersRouter = require('./routes/character');
let genreRouter = require('./routes/genre');

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use('/api/', authRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/characters', charactersRouter);
app.use('/api/genres', genreRouter);

//db connection and seed
require('./database/config/db.js');
seedingDb();

//start server
app.listen(process.env.PORT, () => {
  console.log(`Server on port http://localhost:${process.env.PORT}/`);
});

module.exports = app;
