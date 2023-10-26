import {getConnection } from "./../database/database";

const getProductores =async(req,res)=>{
   const connection =await getConnection();
   const result = await connection.query("select * from productores");
   res.json(result);
};

export const methods ={
    getProductores
}