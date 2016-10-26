const weather = require('./weather')
const location = require('./location')

const argv = require('yargs')
  .option('location', {
    alias: 'l',
    demand: false,
    describe: 'Location to fetch weather for',
    type: 'string'
  })
  .help('help')
  .argv

if (typeof argv.l === 'string' && argv.l.length > 0) {
    weather(argv.l, function (currentWeather) {
      console.log(currentWeather)
    })
} else {
  location(function (response) {
    if (!response) throw 'unable to find location'
    weather(response.city, function (currentWeather) {
      console.log(currentWeather)
    })
  })
}
