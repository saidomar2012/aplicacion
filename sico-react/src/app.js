import express from "express";
import morgan from "morgan";

//router
import productoresRoutes  from "./routes/productores.routes";


const app =express()
//setting
app.set("port",4000);

// moddleware
app.use(morgan("dev"));
app.use("/api/productores",productoresRoutes);

export default app;
