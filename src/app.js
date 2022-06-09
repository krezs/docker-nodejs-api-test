import express from "express";
import morgan from "morgan";

//Routes import
import categoryRoutes from "./routes/category.routes";

const app = express();

//settings
app.set("port", 4000);

//middlewares
app.use(morgan('dev'));

//routes
app.use(categoryRoutes);

export default app;