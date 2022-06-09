import express from "express";
import morgan from "morgan";

const app = express();

//settings
app.set("port", 4000);


//middlewares
app.use(morgan('dev'));

// app.use(require('./routes/index'));

export default app;