using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using WebHost.Data;

namespace WebHost.Clients
{
    public class MainClient
    {
        public HttpClient Client { get; }

        public MainClient(HttpClient client)
        {
            client.BaseAddress = new Uri("http://localhost:3000/");
            client.DefaultRequestHeaders.Add("Accept",
            "application/json");

            Client = client;
        }

        public async Task<string> OnGet()
        {
            var response = await Client.GetAsync("/");

            if (response.IsSuccessStatusCode)
            {
                var responseStream = await response.Content.ReadAsStringAsync();
                //var result = await JsonSerializer.DeserializeAsync<string>(responseStream);
                return responseStream;
            }
            else
            {
                return "ERROR";
            }

        }

        public async ValueTask<List<WeatherForecast>> GetWeatherForecastsAsync()
        {
            var response = await Client.GetAsync("/weather/");

            if(response.IsSuccessStatusCode)
            {
                var responseStream = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<IEnumerable<WeatherForecast>>(responseStream).ToList();
            }
            else
            {
                return new List<WeatherForecast>();
            }
        }
    }
}
