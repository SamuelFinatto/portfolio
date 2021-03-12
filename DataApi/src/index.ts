import express from "express";
import bodyParser from "body-parser";
import { WeatherForecast } from "./lib/WeatherForecast";


const app = express();
app.use(bodyParser.json());
app.get('/', (_req, res) => {
    res.status(200).send("Hello From Samuel!!");
});

app.get('/weather/', (_req, res) => {
    var list = [];
    list.push(new WeatherForecast(new Date(Date.now()), 23, "Rainy"));
    list.push(new WeatherForecast(new Date(Date.now()), 12, "Cloudy"));
    list.push(new WeatherForecast(new Date(Date.now()), 10, "Sunny"));
    res.status(200).send(list);
});


const port= process.env.PORT || 3000;


app.listen(port, () => console.log("API listening on port "+port));