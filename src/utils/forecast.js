const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=945cdeb645abc36c7a8b66b3a07d686c&query=' + longitude + ',' + latitude
    request({ url, json: true }, (error, { body }) => {
        if (error || body.error) {
            callback('Unable to connect to forecast services!')
        } else {
            let data = body.current;
            callback(undefined, data.weather_descriptions[0] + '. It is currently ' + data.temperature + ' out and feels like ' + data.feelslike + ' degrees out')
        }
    })
}

module.exports = forecast
