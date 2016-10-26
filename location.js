const request = require('request')
const url = 'http://ipinfo.io'

module.exports = function(callback) {
  request({
    url: url,
    json: true
  }, function(err, res, body) {
    if (err) throw err
    if (!body) return null
    callback({
      city: body.city,
      loc: body.loc
    })
  })
}
