const ServersModel = require('../serversModel');

const getServers = function() {
    return new Promise((resolve, reject) => {
        ServersModel.find({}, function(err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}


const getServer = function(id) {
    return new Promise((resolve, reject) => {
        ServersModel.findById(id, function(err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

module.exports = { getServers, getServer }