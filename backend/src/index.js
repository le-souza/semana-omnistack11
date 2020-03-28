const express = require('express');
const { errors } = require('celebrate');
const cors = require('cors');
const routes = require("./routes/routes");

const app = express();

app.use(cors());
// Permite receber request body em JSON
app.use(express.json());
app.use(routes);
app.use(errors())
 

app.listen(3333);