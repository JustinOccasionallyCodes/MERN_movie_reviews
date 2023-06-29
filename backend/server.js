import express from 'express';
import cors from 'cors';
import movies from './api/movies.route.js';
//creates Server
const app = express();

//attach Middleware
//Middleware are functions that Express executes after the incoming request and
//before the output. Middlewares might make changes to the request and response objects.
//The "use" function registers a middleware with our Express app
app.use(cors());
app.use(express.json());

//Initial Routes
app.use("/api/v1/movies", movies);
app.use('*', (req,res)=>{
res.status(404).json({error: "not found"})
});
export default app;