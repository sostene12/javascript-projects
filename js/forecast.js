class Forecast {
  constructor() {
    this.key = "P0HLNPhuaibxL3iU5AmG6mfqUdozOAVB";
    this.weatherURI = "http://dataservice.accuweather.com/currentconditions/v1";
    this.cityURI =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
  }

  async getCity(city) {
    const base = this.cityURI;
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
  }
  async getWeather(id) {
    const base = `${this.weatherURI}/${id}`;
    const query = `?apikey=${this.key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
  }
  async updateCity(city) {
    const cityDetails = await this.getCity(city);
    const weather = await this.getWeather(cityDetails.Key);
    return { cityDetails, weather };
  }
}
