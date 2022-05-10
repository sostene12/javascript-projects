const cityForm = document.querySelector("form");

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);
  console.log(weather);
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update the ui with the new city
  updateCity(city);
});
