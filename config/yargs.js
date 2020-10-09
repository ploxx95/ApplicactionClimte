const argv = require("yargs").options({
  direction: {
    alias: "d",
    desc: "Direcion of city to get the climate",
    demand: true,
  },
}).argv;

module.exports = {
  argv,
};
