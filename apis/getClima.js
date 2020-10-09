const axios = require("axios");

const getClima = async (City) => {
  const codifyCity = encodeURI(City);

  const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${codifyCity}&units=metric&appid=9572fb5c951cecbb239b2dd69e0ce904`,
  });
  const resp = await instance.get();

  if (resp.data.main.temp === 0) {
    throw new Error(`Don't find results about this City ${codifyCity} `);
  }

  const climate = resp.data.main.temp;

  return climate;
};

module.exports = {
  getClima,
};
