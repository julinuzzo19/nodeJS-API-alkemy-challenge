const express = require('express');
const app = express();
const port = 3000;

//middlewares

//start server
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
