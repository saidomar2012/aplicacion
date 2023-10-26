const mysql  = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const mysqlConexion = require("./conexion");
const productores = require("./routes/tabla_productor");

var app =express();
app.use(bodyParser.json());
app.use("/productores",productores);
app.listen(3000);





