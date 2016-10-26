const request = require('request');

module.exports = function (location, callback) {

  const apiKey = 'a3ed1549cd8e7a34bd6148a5d1e56a5e';

  const encodedLocation = encodeURIComponent(location);

  if (!encodedLocation) {
    return console.log('no location provided')
  }

  const url = `http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${encodedLocation}&units=metric`

  request({
    url: url,
    json: true
  }, function (err, response, body) {
    if (err) throw err
    callback(`It's ${Math.floor(body.main.temp)} in ${body.name}`)
  })
}