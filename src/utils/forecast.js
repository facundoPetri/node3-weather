const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=48cb0cc23c40714470b51db4afe717ba&query=${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('something went wrong')
        } else if (body.error) {
            callback(body.error.info)
        } else {
            const { temperature, feelslike, weather_descriptions } =
                body.current
            callback(
                undefined,
                `${weather_descriptions[0]}. hace ${temperature} pero se siente como ${feelslike}`
            )
        }
    })
}

module.exports = forecast
