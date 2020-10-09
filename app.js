const { argv } = require("./config/yargs");
const { getCity } = require("./apis/getPais");
const { getClima } = require("./apis/getClima.js");

const country = encodeURI(argv.direction);

const getApi = async (countrys) => {
  try {
    const city = await getCity(countrys);
    const temp = await getClima(city);

    return `${countrys}  :  EL CLIMA DE ${city} ES DE ${temp}`;
  } catch (err) {
    return `NO SE PUDO DETERMINAR EL CLIMA DE ${countrys}`;
  }
};

getApi(country).then(console.log).catch(console.log);
