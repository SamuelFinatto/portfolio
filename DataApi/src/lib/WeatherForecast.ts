export class WeatherForecast{
    Date: Date;
    TemperatureC: number;
    TemperatureF: number;
    Summary: string;

    constructor(Date: Date, TemperatureC: number, Summary: string){
        this.Date = Date;
        this.TemperatureC = TemperatureC;
        this.TemperatureF = 32 + Math.floor(TemperatureC / 0.5556);
        this.Summary = Summary;
    }
}