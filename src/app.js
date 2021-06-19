const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/characters',require('./routes/characters'));

//start server
app.listen(app.get('port'), () => {
  console.log(`Server on port http://localhost:${app.get('port')}/`);
});
