const mysql =require("mysql");
var mysqlConexion=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"30111989",
    database:"sistema",
    multipleStatements:true,

});

mysqlConexion.connect(
    (err)=>{
        if(!err){
            console.log("Conectado");
        }else{
            console.log("No Conectado");
        }
    }
);
module.exports = mysqlConexion;