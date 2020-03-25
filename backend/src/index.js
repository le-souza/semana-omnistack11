const express = require('express');
const cors = require('cors');
const routes = require("./routes/routes");

const app = express();

app.use(cors());
// Permite receber request body em JSON
app.use(express.json());
app.use(routes);
 

app.listen(3333);