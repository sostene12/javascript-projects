const API_KEY = "0KlrSz6zm1qAhQt8z9IKn5JaloE55as4";
// const location = document.

// get weather information
const getWeather = async (id) => {
  const base = `http://dataservice.accuweather.com/currentconditions/v1/${id}`;
  const query = `?apikey=${API_KEY}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

// get city information
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${API_KEY}&q=${city}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};
