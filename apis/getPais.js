const axios = require("axios");

const getCity = async (country) => {
  const codifyCountry = encodeURI(country);

  const instance = axios.create({
    baseURL: `https://restcountries.eu/rest/v2/name/${codifyCountry}`,
  });
  const resp = await instance.get();

  if (resp.data.length === 0) {
    throw new Error(`Don't find results about this Country ${codifyCountry} `);
  }

  const data = resp.data[0];
  const capital = data.capital;

  return capital;
};

module.exports = {
  getCity,
};
