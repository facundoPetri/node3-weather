const request = require('request')

const geocode = (address, callback) => {
    const url = `http://api.positionstack.com/v1/forward?access_key=02640ca96af58b0260f56c22349844a3&query=${encodeURIComponent(
        address
    )}&limit=1`

    request({ url, json: true }, (error, { body } = {}) => {
        if (body.error || error) {
            callback(body.error || error)
        } else if (!body.data.length) {
            callback('zero results')
        } else {
            const { latitude, longitude, label: location } = body.data[0]
            callback(undefined, { 
                latitude,
                longitude,
                location,
            })
        }
    })
}

module.exports = geocode
